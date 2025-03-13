import type { IUseCase } from "./interfaces.ts"

// lida com tratamento das requests/responses
export class UserController {
   private useCase : IUseCase
   constructor(_useCase: IUseCase) {
      this.useCase = _useCase
   }

   createUser(req: any, res: any) {
      this.useCase.createUser(req.Body)
      res.status(200).send("Ok")
   }

   readUser(req: any, res: any) {
      let data = this.useCase.readUser()
      res.status(200).send(data)
   }
}
