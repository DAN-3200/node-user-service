import { UserUseCase } from "./useCase.ts"

// lida com tratamento das requests/responses
export class UserController {
   private useCase: UserUseCase
   constructor(useCase: UserUseCase) {
      this.useCase = useCase
   }

   createUser(req, res) {
      let data = req.body

      let isSave = this.useCase.createUser(data)
      isSave ? res.status(200).send("Ok") : res.status(400).send("No save")
   }

   readUser(req, res) {
      let data = this.useCase.readUser()
      
      res.status(200).send(data)
   }

   updateUser(req, res) {

   }

   deleteUser(req, res) {

   }

}
