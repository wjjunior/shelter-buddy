/* eslint-disable no-unused-vars */
import { SortableTableData } from '../sortable-list/types'

export type SearchInputProps = {
  list: SortableTableData[]
  setFilteredList: (filteredList: SortableTableData[]) => void
}
