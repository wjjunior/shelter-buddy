/* eslint-disable no-unused-vars */
import React from 'react'

import { ListModel } from '../../../../domain/models'

export type SortableListTableProps = {
  headers: {
    label: string
    property: keyof ListModel
    isSortable: boolean
  }[]
  itemsList: ListModel[]
  TableRowComponent: React.FC<{ item: ListModel }>
  sortBy: keyof ListModel
  sortOrder: 'asc' | 'desc'
  handleSort: (property: string) => void
}
