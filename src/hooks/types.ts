import { Animal } from '../store/types'

export interface AnimalListHook {
  loading: boolean
  error: Error | null
  animals: Animal[]
}
