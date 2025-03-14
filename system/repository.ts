// PRISMA ORM conectado ao SQLite
import type { Idb } from "./interfaces.ts";

export class FakeDB implements Idb {
   private FakeDatabase: any[] = []
   save(info: any): boolean {
      this.FakeDatabase.push(info)
      return true
   }

   read(): [any[], boolean] {
      return [this.FakeDatabase, true]
   }

   update(): boolean {
      return true
   }

   delete(): boolean {
      return true
   }
}