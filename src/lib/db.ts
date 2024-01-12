import { PrismaClient } from '@prisma/client'
import 'server-only';


declare global {
    var cachedPrisma: PrismaClient;
}
export let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
}
else {
    if (!global.cachedPrisma) {
        global.cachedPrisma = new PrismaClient();
    }
    prisma = global.cachedPrisma;
}
// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// async function main() {
//     const user = await prisma.user.create({
//         data: {
//             name: 'Alice',
//             email: 'alice@prisma.io',
//         },
//     })
//     console.log(user)
// }

// main()
//     .then(async () => {
//         await prisma.$disconnect()
//     })
//     .catch(async (e) => {
//         console.error(e)
//         await prisma.$disconnect()
//         process.exit(1)
//     })