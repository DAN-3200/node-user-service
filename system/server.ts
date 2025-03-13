import Express from "express"
import { UserController } from "./controller.ts"
import { UserUseCase } from "./useCase.ts"
import { FakeDB } from "./repository.ts"

export function runServer() {
   const app = Express()
   const port = 8080

   app.use(Express.json()) // Parse JSON Body
   userRoutes(app)
   app.listen(port, () => console.log(`\nServer runnig [http://localhost:${port}/]\n`))
}

function userRoutes(app: Express.Application) {
   let useFakeDB = new FakeDB()
   let useCase = new UserUseCase(useFakeDB)
   let useController = new UserController(useCase)

   app.post("/create", (req, res) => useController.createUser(req, res))
   app.get("/read", (req, res) => useController.readUser(req, res))
}
      