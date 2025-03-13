import type { User } from './models.ts'
import type { IUseCase, IDB } from './interfaces.ts'

export class UserUseCase implements IUseCase {
   private DB
   constructor(DB: IDB) {
      this.DB = DB
   }

   createUser(info) {
      let modelUser: User = {
         id: `Id-${Math.random()}`,
         name: "Daniel",
         email: "dan@gmail.com",
         password: "pokemon32",
         role: "user",
         date: "29/09/2025"
      }

      this.DB.save(modelUser)
   }

   readUser(): User[] {
      let data = this.DB.read()

      return data
   }
   updateUser() {
       
   }
   deleteUser() {
       
   }
}
