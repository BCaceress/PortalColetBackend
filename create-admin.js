const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function createAdmin() {
    try {
        console.log('Verificando se o usuário admin já existe...');
        const existingUser = await prisma.usuario.findUnique({
            where: { email: 'admin@admin.com' },
        });

        if (!existingUser) {
            console.log('Usuário admin não encontrado. Criando usuário...');
            const hashedPassword = await bcrypt.hash('12345678', 10);

            const newUser = await prisma.usuario.create({
                data: {
                    nome: 'Bruno Caceres',
                    email: 'admin@admin.com',
                    senha: hashedPassword,
                    funcao: 'Administrador',
                    fl_ativo: true,
                },
            });

            console.log('Usuário admin criado com sucesso:', newUser);
        } else {
            console.log('Usuário admin já existe:', existingUser);
        }
    } catch (error) {
        console.error('Erro ao criar usuário admin:', error);
    } finally {
        await prisma.$disconnect();
    }
}

createAdmin();