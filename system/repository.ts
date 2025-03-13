// PRISMA ORM conectado ao SQLite
import type { IDB } from "./interfaces.ts";

export class FakeDB implements IDB {
   private FakeDatabase: any[] = []
   save(info: any) {
      this.FakeDatabase.push(info)
   }

   read() {
      return this.FakeDatabase
   }

   update() {

   }
   
   delete() {

   }
}