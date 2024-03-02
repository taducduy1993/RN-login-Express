import { PrismaClient } from '@prisma/client'

export async function permission(prisma: PrismaClient) {
    // User Roles
    const roleCreateUser = await prisma.permission.create({
        data: { id: 1, name: "create_user" }
    });

    const roleEditUser = await prisma.permission.create({
        data: { id: 2, name: "edit_user" }
    });

    const roleReadUser = await prisma.permission.create({
        data: { id: 3, name: "read_user" }
    });

    const roleDeleteDUser = await prisma.permission.create({
        data: { id: 4, name: "delete_user" }
    });

    // File Roles
    const roleCreateFile = await prisma.permission.create({
        data: { id: 5, name: "create_file" }
    });

    const roleEditFile = await prisma.permission.create({
        data: { id: 6, name: "edit_file" }
    });

    const roleReadFile = await prisma.permission.create({
        data: { id: 7, name: "read_file" }
    });

    const roleDeleteDFile = await prisma.permission.create({
        data: { id: 8, name: "delete_file" }
    });

    // Share file Roles
    const roleShareFile = await prisma.permission.create({
        data: { id: 9, name: "share_file" }
    });
}
