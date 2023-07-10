/* eslint-disable no-unused-vars */
import React from 'react'

import { ListModel } from '../../domain/models'

export interface SortableListDataWithCount<T extends ListModel> {
  data: T[]
  count: number
}

export interface SortableListProps {
  headers: { label: string; property: keyof ListModel; isSortable: boolean }[]
  tableData: SortableListDataWithCount<ListModel>
  TableRowComponent: React.FC<{ item: ListModel }>
  MobileItemComponent: React.FC<{ item: ListModel }>
  title: string
  handleSortOrderChange: (property: string) => void
  currentPage?: number
  handlePageChange?: (page: number) => void
  searchInputValue?: string
  handleSearchInputChange?: (value: string) => void
  sortBy?: keyof ListModel
  sortOrder?: 'asc' | 'desc'
  isLoading?: boolean
}
