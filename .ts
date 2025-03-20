import { PrismaClient } from "@prisma/client";
import { Err } from "./system/interfaces.ts"

// [https://www.prisma.io/docs/orm/overview/databases/sqlite]
// [https://www.prisma.io/docs/getting-started/quickstart-sqlite#1-create-typescript-project-and-set-up-prisma-orm]
// [https://www.youtube.com/watch?v=uApCW1gcpdE]

const prisma = new PrismaClient();

// function Try<T, Err>(executble : () => T): [T , Err] {
//    try {
//       const result = executble()
//       return [result as T, null]
//    } catch (e) {
//       return [e as Err]
//    }
// }

(async () => {
   const userInDB = await prisma.user.count()
   const userSaved = await prisma.user.create({
      data: {
         Password: "tonySonic1227",
         Email: "Tony@gmail.com",
         Role: "user",
         Name: "Tornado"
      }
   })
  
   console.log(userSaved)
})()