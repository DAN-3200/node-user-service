import type { User } from './models.ts'
import type { Idb, Err } from './interfaces.ts'

export class UserUseCase {
   private DB: Idb
   constructor(DB: Idb) {
      this.DB = DB
   }

   createUser(info: Partial<User>): Err {
      let modelUser: User = {
         id: "",
         name: info.name,
         email: info.email,
         password: info.password,
         role: info.role,
         date: new Date().toLocaleString("pt-BR")
      }
      let err = this.DB.save(modelUser)
      return err
   }

   readUser(): [User[], Err] {
      let [data, err] = this.DB.read()
      return [data, err]
   }

   updateUser(info: User): Err {
      let err = this.DB.update(info)
      return err
   }

   deleteUser(userID): Err {
      let err = this.DB.delete(userID)
      return err
   }
}
