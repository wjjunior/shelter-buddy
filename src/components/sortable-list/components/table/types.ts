/* eslint-disable no-unused-vars */
import React from 'react'

import { SortableTableData } from '../../../../components/sortable-list/types'

export type SortableListTableProps = {
  headers: { label: string; property: keyof SortableTableData; isSortable: boolean }[]
  itemsList: SortableTableData[]
  TableRowComponent: React.FC<{ item: SortableTableData }>
  sortBy: keyof SortableTableData
  sortOrder: 'asc' | 'desc'
  handleSort: (property: keyof SortableTableData) => void
}
