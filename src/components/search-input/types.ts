/* eslint-disable no-unused-vars */
import { SortableTableData } from '../sortable-table/types'

export type SearchInputProps = {
  list: SortableTableData[]
  setFilteredList: (filteredList: SortableTableData[]) => void
}
