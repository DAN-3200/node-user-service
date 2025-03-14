import { User } from "./models.ts"
// Contratos recorrentes
export interface Idb {
   save(info): boolean
   read(): [User[], boolean]
   update(info): boolean
   delete(id): boolean
}