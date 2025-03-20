import type { Err, Idb } from "./interfaces.ts";
import type { User } from "./models.ts";
import { PrismaClient } from "@prisma/client";

export class FakeDB implements Idb {
   private FakeDatabase: User[] = [];
   private countID: number = 0;
   save(info: User): Err {
      info.id = `C${this.countID++}`;
      this.FakeDatabase.push(info);
      return null;
   }

   read(): [any[], Err] {
      return [this.FakeDatabase, null];
   }

   update(info: User): Err {
      let userInDB = this.FakeDatabase.find((item) => item.id == info.id);
      if (userInDB == null) {
         return "não tem usuário no banco";
      }

      for (let i = 0; i < this.FakeDatabase.length; i++) {
         if (info.id == this.FakeDatabase[i].id) {
            this.FakeDatabase[i].name = info.name;
            this.FakeDatabase[i].email = info.email;
            this.FakeDatabase[i].password = info.password;
            this.FakeDatabase[i].role = info.role;
         }
      }
      return null;
   }

   delete(userID): Err {
      let userInDB = this.FakeDatabase.find((item) => item.id == userID);
      if (userInDB == null) {
         return "não tem usuário no banco";
      }

      this.FakeDatabase = this.FakeDatabase.filter((item) =>
         item.id !== userID
      );
      return null;
   }
}

// PRISMA ORM conectado ao SQLite
export class UserSQLite implements Idb {
   private connDB = new PrismaClient()
   async save(info: User): Promise<Err> {
      
      // aplicar erro handling
      const x = await this.connDB.user.create({
         data: {
            Password: info.password,
            Email: info.email,
            Role: info.role,
            Name: info.name
         }
      })
      console.log(x)
      return;
   }
   read(): [User[], Err] {
      return;
   }
   update(info: User): Err {
      return;
   }
   delete(info: { id: string }): Err {
      return;
   }
}
