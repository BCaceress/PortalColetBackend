import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClientesService {
    constructor(private prisma: PrismaService) { }

    async create(createClienteDto: CreateClienteDto) {
        // Extract emails from the DTO
        const { emails, ...clienteData } = createClienteDto;

        // Não é mais necessário processar tm_minimo_horas, já que agora é uma string

        // Create the client with its emails in a transaction
        return this.prisma.$transaction(async (prisma) => {
            // Create the client
            const cliente = await prisma.cliente.create({
                data: clienteData,
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
        return this.prisma.cliente.findMany();
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

    async update(id: number, updateClienteDto: UpdateClienteDto) {
        try {
            // Extract emails from the DTO
            const { emails, ...clienteData } = updateClienteDto;

            // Não é mais necessário processar tm_minimo_horas, já que agora é uma string

            return this.prisma.$transaction(async (prisma) => {
                // Update client data
                const updatedCliente = await prisma.cliente.update({
                    where: { id_cliente: id },
                    data: clienteData,
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
}