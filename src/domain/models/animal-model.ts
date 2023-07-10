import { ListModel } from './list-model'

export interface Animal extends ListModel {
  id: number | string
  name?: string
  type: string
  breed: string
  gender: string
  color: string
  img?: string | null
}
