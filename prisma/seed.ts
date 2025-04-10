import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    // Check if the user already exists to avoid duplicates
    const existingUser = await prisma.usuario.findUnique({
        where: { email: 'admin@admin.com' },
    });

    if (!existingUser) {
        const hashedPassword = await bcrypt.hash('12345678', 10);

        await prisma.usuario.create({
            data: {
                nome: 'Bruno Caceres',
                email: 'admin@admin.com',
                senha: hashedPassword,
                funcao: 'admin',
            },
        });

        console.log('Admin user seeded successfully!');
    } else {
        console.log('Admin user already exists, skipping seed.');
    }
}

main()
    .catch((e) => {
        console.error('Error seeding database:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });