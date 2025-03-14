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

   app.post("/createUser", (req, res) => useController.createUser(req, res))
   app.get("/readUser", (req, res) => useController.readUser(req, res))
   app.put("/updateUser", (req, res) => useController.updateUser(req, res))
   app.delete("/deleteUser", (req, res) => useController.deleteUser(req, res))

}
