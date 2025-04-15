import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    console.log('Starting seed script...');
    try {
        // Check if the user already exists to avoid duplicates
        console.log('Checking if admin user already exists...');
        const existingUser = await prisma.usuario.findUnique({
            where: { email: 'admin@admin.com' },
        });

        if (!existingUser) {
            console.log('Admin user does not exist, creating new user...');
            const hashedPassword = await bcrypt.hash('12345678', 10);

            // Create the user
            const newUser = await prisma.usuario.create({
                data: {
                    nome: 'Bruno Caceres',
                    email: 'admin@admin.com',
                    senha: hashedPassword,
                    funcao: 'Administrador',
                },
            });

            console.log('Admin user created successfully:', newUser);
        } else {
            console.log('Admin user already exists:', existingUser);
        }
    } catch (error) {
        console.error('Error during seed execution:', error);
        throw error;
    }
}

main()
    .catch((e) => {
        console.error('Error seeding database:', e);
        process.exit(1);
    })
    .finally(async () => {
        console.log('Disconnecting from database...');
        await prisma.$disconnect();
    });