import { AnimalList } from '../../store/animal-store/types'

export interface AnimalListHook {
  loading: boolean
  error: Error | null
  animalList: AnimalList
}
