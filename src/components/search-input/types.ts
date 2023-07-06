/* eslint-disable no-unused-vars */
import { SortableListData } from '../sortable-list/types'

export type SearchInputProps = {
  list: SortableListData[]
  setFilteredList: (filteredList: SortableListData[]) => void
}
