import { PrismaClient } from '@prisma/client'

export async function rolePermission(prisma: PrismaClient) {
    // Role and permission for super user
    await prisma.rolePermission.create({
        data: { id: 1, roleId: 1, permissionId: 1 }
    });

    await prisma.rolePermission.create({
        data: { id: 2, roleId: 1, permissionId: 2 }
    });

    await prisma.rolePermission.create({
        data: { id: 3, roleId: 1, permissionId: 3 }
    });

    await prisma.rolePermission.create({
        data: { id: 4, roleId: 1, permissionId: 4 }
    });

    await prisma.rolePermission.create({
        data: { id: 5, roleId: 1, permissionId: 5 }
    });

    await prisma.rolePermission.create({
        data: { id: 6, roleId: 1, permissionId: 6 }
    });

    await prisma.rolePermission.create({
        data: { id: 7, roleId: 1, permissionId: 7 }
    });

    await prisma.rolePermission.create({
        data: { id: 8, roleId: 1, permissionId: 8 }
    });

    await prisma.rolePermission.create({
        data: { id: 9, roleId: 1, permissionId: 9 }
    });

    // Role and permission for admin
    await prisma.rolePermission.create({
        data: { id: 10, roleId: 2, permissionId: 1 }
    });

    await prisma.rolePermission.create({
        data: { id: 11, roleId: 2, permissionId: 2 }
    });

    await prisma.rolePermission.create({
        data: { id: 12, roleId: 2, permissionId: 3 }
    });

    await prisma.rolePermission.create({
        data: { id: 13, roleId: 2, permissionId: 4 }
    });

    await prisma.rolePermission.create({
        data: { id: 14, roleId: 2, permissionId: 5 }
    });

    await prisma.rolePermission.create({
        data: { id: 15, roleId: 2, permissionId: 6 }
    });

    await prisma.rolePermission.create({
        data: { id: 16, roleId: 2, permissionId: 7 }
    });

    await prisma.rolePermission.create({
        data: { id: 17, roleId: 2, permissionId: 8 }
    });

    await prisma.rolePermission.create({
        data: { id: 18, roleId: 2, permissionId: 9 }
    });

    // Role and permission for user
    await prisma.rolePermission.create({
        data: { id: 19, roleId: 3, permissionId: 5 }
    });

    await prisma.rolePermission.create({
        data: { id: 20, roleId: 3, permissionId: 6 }
    });

    await prisma.rolePermission.create({
        data: { id: 21, roleId: 3, permissionId: 7 }
    });

    await prisma.rolePermission.create({
        data: { roleId: 3, permissionId: 8 }
    });

    await prisma.rolePermission.create({
        data: { roleId: 3, permissionId: 9 }
    });

}
