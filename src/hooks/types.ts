import { AnimalList } from '../store/types'

export interface AnimalListHook {
  loading: boolean
  error: Error | null
  animalList: AnimalList
}
