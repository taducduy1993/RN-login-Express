import { PrismaClient } from '@prisma/client';
import { permission } from './permission';
import { role } from './role';
import { rolePermission } from './rolePermission';
import { user } from './user';
import { userRole } from './userRole';

const prisma = new PrismaClient()

async function main() {
    await permission(prisma);
    await role(prisma);
    await rolePermission(prisma);
    await user(prisma);
    await userRole(prisma);
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })