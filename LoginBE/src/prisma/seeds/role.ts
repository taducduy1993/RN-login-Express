import { PrismaClient } from '@prisma/client'

export async function role(prisma: PrismaClient) {
    const superuser = await prisma.role.create({
        data:  { id: 1, name: "Superuser" }
    });
    const admin = await prisma.role.create({
        data:  { id: 2, name: "Admin" }
    });
    const user = await prisma.role.create({
        data:  { id:3, name: "User" }
    });
}
