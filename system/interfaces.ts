import type { User } from "./models.ts"

// Contratos recorrentes
export interface Idb {
   save(info): Err
   read(): [User[], Err]
   update(info: User): Err
   delete(info: { id: string }): Err
}

export type Err = Error | string | null