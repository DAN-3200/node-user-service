import { UserUseCase } from "./useCase.ts"

// lida com tratamento das requests/responses
export class UserController {
   private useCase: UserUseCase
   constructor(useCase: UserUseCase) {
      this.useCase = useCase
   }

   createUser(req, res) {
      let data = req.body
      let err = this.useCase.createUser(data)
      if (err != null) {
         console.log("Error: ", err)
         res.status(400).send(err)
         return
      }
      res.status(200).send("Saved User")
   }

   readUser(_req, res) {
      let [data, err] = this.useCase.readUser()
      if (err != null) {
         console.log("Error: ", err)
         res.status(400).send(err)
         return
      }
      res.status(200).send(data)
   }

   updateUser(req, res) {
      let data = req.body
      let err = this.useCase.updateUser(data)
      if (err != null) {
         console.log("Error: ", err)
         res.status(400).send(err)
         return
      }
      res.status(200).send("Updated User")
   }

   deleteUser(req, res) {
      let data: { id: string } = req.body
      let err = this.useCase.deleteUser(data.id)
      if (err != null) {
         console.log("Error: ", err)
         res.status(400).send(err)
         return
      }
      res.status(200).send("Deleted User")
   }
   
}