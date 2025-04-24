import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClientesService {
    constructor(private prisma: PrismaService) { }

    async create(createClienteDto: CreateClienteDto) {
        // Extract emails and ID from the DTO
        const { emails, fl_ativo, id_cliente, ...clienteDataRaw } = createClienteDto as any;

        // Check if ID is provided and if it's already in use
        if (id_cliente !== undefined) {
            const clienteWithId = await this.prisma.cliente.findUnique({
                where: { id_cliente },
            });

            if (clienteWithId) {
                throw new ConflictException(`Cliente com ID ${id_cliente} já existe`);
            }
        }

        // Get the next ID if not provided
        let nextId = id_cliente;
        if (nextId === undefined) {
            const lastCliente = await this.prisma.cliente.findFirst({
                orderBy: { id_cliente: 'desc' },
            });
            nextId = lastCliente ? lastCliente.id_cliente + 1 : 1;
        }

        // Handle optional fields by providing default values for fields that are required by Prisma
        const clienteData = {
            ...clienteDataRaw,
            id_cliente: nextId,
            // Handle optional numeric fields
            nr_nomeados: clienteDataRaw.nr_nomeados ?? 0,
            nr_simultaneos: clienteDataRaw.nr_simultaneos ?? 0,
            nr_tecnica_remoto: clienteDataRaw.nr_tecnica_remoto ?? 0,
            nr_tecnica_presencial: clienteDataRaw.nr_tecnica_presencial ?? 0,
            nr_codigo_zz: clienteDataRaw.nr_codigo_zz ?? 0,
            // Handle optional string fields
            ds_site: clienteDataRaw.ds_site ?? '',
            ds_complemento: clienteDataRaw.ds_complemento ?? '',
            nr_codigo_ibge: clienteDataRaw.nr_codigo_ibge ?? '',
            tx_observacao_ident: clienteDataRaw.tx_observacao_ident ?? '',
            ds_regiao: clienteDataRaw.ds_regiao ?? '',
            // Set default for optional fields
            tx_observacao_contrato: clienteDataRaw.tx_observacao_contrato ?? '',
            nr_qtde_documentos: clienteDataRaw.nr_qtde_documentos ?? 0,
            ds_franquia_nf: clienteDataRaw.ds_franquia_nf ?? '',
            nr_valor_franqia: clienteDataRaw.nr_valor_franqia ?? 0,
            nr_valor_excendente: clienteDataRaw.nr_valor_excendente ?? 0,
            // Set default for ds_situacao if not provided
            ds_situacao: clienteDataRaw.ds_situacao ?? 'Ativo',
        };

        // Create the client with its emails in a transaction
        return this.prisma.$transaction(async (prisma) => {
            // Create the client
            const cliente = await prisma.cliente.create({
                data: clienteData as any, // Use type assertion to bypass TypeScript error
            });

            // If emails exist, create email records for the client
            if (emails && emails.length > 0) {
                await prisma.emailCliente.createMany({
                    data: emails.map(email => ({
                        ds_email: email,
                        id_cliente: cliente.id_cliente,
                    })),
                });
            }

            // Return the client with its emails
            return prisma.cliente.findUnique({
                where: { id_cliente: cliente.id_cliente },
                include: { emails: true }
            });
        });
    }

    async findAll() {
        return this.prisma.cliente.findMany({
            select: {
                id_cliente: true,
                ds_nome: true,
                ds_razao_social: true,
                nr_cnpj: true,
                nr_inscricao_estadual: true,
                ds_site: true,
                ds_endereco: true,
                ds_cep: true,
                ds_uf: true,
                ds_cidade: true,
                ds_bairro: true,
                nr_numero: true,
                ds_complemento: true,
                nr_codigo_ibge: true,
                nr_latitude: true,
                nr_longitude: true,
                nr_distancia_km: true,
                tx_observacao_ident: true,
                fl_matriz: true,
                ds_situacao: true,
                ds_sistema: true,
                ds_contrato: true,
                nr_nomeados: true,
                nr_simultaneos: true,
                nr_tecnica_remoto: true,
                nr_tecnica_presencial: true,
                tm_minimo_horas: true,
                ds_diario_viagem: true,
                ds_regiao: true,
                tx_observacao_contrato: true,
                nr_codigo_zz: true,
                nr_qtde_documentos: true,
                nr_valor_franqia: true,
                nr_valor_excendente: true,
                dt_data_contrato: true,
                clientesContatos: {
                    select: {
                        id: true
                    }
                },
                emails: {
                    select: {
                        id: true
                    }
                },
                rats: {
                    select: {
                        id_rat: true
                    }
                }
            },
            orderBy: {
                ds_nome: 'asc'
            }
        });
    }

    async findOne(id: number) {
        const cliente = await this.prisma.cliente.findUnique({
            where: { id_cliente: id },
            include: {
                clientesContatos: {
                    include: {
                        contato: true,
                    },
                },
                emails: true,
            },
        });

        if (!cliente) {
            throw new NotFoundException(`Cliente com ID ${id} não encontrado`);
        }

        return cliente;
    }

    async findActiveList() {
        return this.prisma.cliente.findMany({
            where: {
                ds_situacao: {
                    notIn: ['Inativo']
                }
            },
            select: {
                id_cliente: true,
                ds_nome: true
            },
            orderBy: {
                ds_nome: 'asc'
            }
        });
    }

    async update(id: number, updateClienteDto: UpdateClienteDto) {
        try {
            // Extract emails from the DTO and remove fl_ativo if present
            const { emails, fl_ativo, ...clienteDataRaw } = updateClienteDto as any;

            // Handle optional fields by providing default values for fields that are required by Prisma
            const clienteData = {
                ...clienteDataRaw,
                // Handle optional numeric fields
                nr_nomeados: clienteDataRaw.nr_nomeados ?? 0,
                nr_simultaneos: clienteDataRaw.nr_simultaneos ?? 0,
                nr_tecnica_remoto: clienteDataRaw.nr_tecnica_remoto ?? 0,
                nr_tecnica_presencial: clienteDataRaw.nr_tecnica_presencial ?? 0,
                nr_codigo_zz: clienteDataRaw.nr_codigo_zz ?? 0,
                // Handle optional string fields
                ds_site: clienteDataRaw.ds_site ?? '',
                ds_complemento: clienteDataRaw.ds_complemento ?? '',
                nr_codigo_ibge: clienteDataRaw.nr_codigo_ibge ?? '',
                tx_observacao_ident: clienteDataRaw.tx_observacao_ident ?? '',
                ds_regiao: clienteDataRaw.ds_regiao ?? '',
                // Set default for optional fields that might be null
                tx_observacao_contrato: clienteDataRaw.tx_observacao_contrato ?? '',
                nr_qtde_documentos: clienteDataRaw.nr_qtde_documentos ?? 0,
                ds_franquia_nf: clienteDataRaw.ds_franquia_nf ?? '',
                nr_valor_franqia: clienteDataRaw.nr_valor_franqia ?? 0,
                nr_valor_excendente: clienteDataRaw.nr_valor_excendente ?? 0,
            };

            return this.prisma.$transaction(async (prisma) => {
                // Update client data
                const updatedCliente = await prisma.cliente.update({
                    where: { id_cliente: id },
                    data: clienteData as any, // Use type assertion to bypass TypeScript error
                });

                // If emails are provided, update them
                if (emails) {
                    // Delete existing emails
                    await prisma.emailCliente.deleteMany({
                        where: { id_cliente: id },
                    });

                    // Create new emails if array is not empty
                    if (emails.length > 0) {
                        await prisma.emailCliente.createMany({
                            data: emails.map(email => ({
                                ds_email: email,
                                id_cliente: id,
                            })),
                        });
                    }
                }

                // Return updated client with emails
                return prisma.cliente.findUnique({
                    where: { id_cliente: id },
                    include: {
                        emails: true,
                        clientesContatos: {
                            include: {
                                contato: true,
                            },
                        },
                    },
                });
            });
        } catch (error) {
            throw new NotFoundException(`Cliente com ID ${id} não encontrado`);
        }
    }

    async remove(id: number) {
        try {
            return await this.prisma.cliente.delete({
                where: { id_cliente: id },
            });
        } catch (error) {
            throw new NotFoundException(`Cliente com ID ${id} não encontrado`);
        }
    }

    async getEmails(id_cliente: number) {
        const cliente = await this.prisma.cliente.findUnique({
            where: { id_cliente },
            select: { emails: true }
        });

        if (!cliente) {
            throw new NotFoundException(`Cliente com ID ${id_cliente} não encontrado`);
        }

        return cliente.emails;
    }

    async getEmailById(id: number) {
        const email = await this.prisma.emailCliente.findUnique({
            where: { id }
        });

        if (!email) {
            throw new NotFoundException(`Email com ID ${id} não encontrado`);
        }

        return email;
    }

    async createEmail(createEmailClienteDto: any) {
        const { id_cliente, ds_email } = createEmailClienteDto;

        // Verificar se o cliente existe
        const clienteExists = await this.prisma.cliente.findUnique({
            where: { id_cliente }
        });

        if (!clienteExists) {
            throw new NotFoundException(`Cliente com ID ${id_cliente} não encontrado`);
        }

        // Verificar se o email já existe para este cliente
        const emailExists = await this.prisma.emailCliente.findFirst({
            where: {
                id_cliente,
                ds_email
            }
        });

        if (emailExists) {
            throw new ConflictException(`Email ${ds_email} já existe para este cliente`);
        }

        // Criar o novo email
        return this.prisma.emailCliente.create({
            data: {
                ds_email,
                id_cliente
            }
        });
    }

    async updateEmail(id: number, updateEmailClienteDto: any) {
        const { ds_email } = updateEmailClienteDto;

        // Verificar se o email existe
        const emailExists = await this.prisma.emailCliente.findUnique({
            where: { id }
        });

        if (!emailExists) {
            throw new NotFoundException(`Email com ID ${id} não encontrado`);
        }

        // Atualizar o email
        return this.prisma.emailCliente.update({
            where: { id },
            data: { ds_email }
        });
    }

    async removeEmail(id: number) {
        try {
            // Verificar se o email existe
            const emailExists = await this.prisma.emailCliente.findUnique({
                where: { id }
            });

            if (!emailExists) {
                throw new NotFoundException(`Email com ID ${id} não encontrado`);
            }

            // Remover o email
            return this.prisma.emailCliente.delete({
                where: { id }
            });
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw error;
            }
            throw new NotFoundException(`Email com ID ${id} não encontrado`);
        }
    }
}