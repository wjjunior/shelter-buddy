import { SortableListDataWithCount } from '../../components/sortable-list/types'
import { Animal } from '../../domain/models'

export interface AnimalListHook {
  loading: boolean
  error: Error | null
  animalList: SortableListDataWithCount<Animal>
}
