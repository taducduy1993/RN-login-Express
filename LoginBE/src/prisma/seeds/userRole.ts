import { PrismaClient } from '@prisma/client'

export async function userRole(prisma: PrismaClient) {
    await prisma.userRole.create({
        data: { id: 1, roleId: 1, userId: 1, status: 1 }
    });

    // await prisma.userRole.create({
    //     data: { id: 2, roleId: 3, userId: 2, status: 1 }
    // });
}
