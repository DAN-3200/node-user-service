import type { User } from './models.ts'
import type { Idb } from './interfaces.ts'

export class UserUseCase {
   private DB: Idb
   constructor(DB: Idb) {
      this.DB = DB
   }

   createUser(info: Partial<User>): boolean {
      let modelUser: User = {
         id: info.id,
         name: info.name,
         email: info.email,
         password: info.password,
         role: info.role,
         date: Date.now().toFixed()
      }
      let err = this.DB.save(modelUser)
      return err
   }

   readUser(): [User[], boolean] {
      let [data, err] = this.DB.read()
      return [data, err]
   }

   updateUser(info: Partial<User>): boolean {
      let err = this.DB.update(info)
      return err
   }

   deleteUser(id): boolean {
      let err = this.DB.delete(id)
      return err
   }
}
