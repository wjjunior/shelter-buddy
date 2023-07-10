/* eslint-disable no-unused-vars */
import React from 'react'

import { SortableListData } from '../../../../components/sortable-list/types'

export type SortableListTableProps = {
  headers: {
    label: string
    property: keyof SortableListData
    isSortable: boolean
  }[]
  itemsList: SortableListData[]
  TableRowComponent: React.FC<{ item: SortableListData }>
  sortBy: keyof SortableListData
  sortOrder: 'asc' | 'desc'
  handleSort: (property: string) => void
}
