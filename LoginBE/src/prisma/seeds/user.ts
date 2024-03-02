import { PrismaClient } from '@prisma/client'

export async function user(prisma: PrismaClient) {
    const superAdmin = await prisma.user.create({
        data: {
            id: 1,
            name: 'Admin',
            email: 'admin@sync.com',
            password: 'admin123',
            status: 1
          },
    });

    // const userTest1 = await prisma.user.create({
    //     data: {
    //         id: 2,
    //         name: 'User Test 1',
    //         email: 'user.test@sync.com',
    //         password: 'user123',
    //         status: 1
    //       },
    // });
}
