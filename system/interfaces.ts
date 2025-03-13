// Contrato
export interface IUseCase {
   createUser(info)
   readUser()
   updateUser()
   deleteUser()
}

export interface IDB {
   save(info)
   read()
   update()
   delete()
}