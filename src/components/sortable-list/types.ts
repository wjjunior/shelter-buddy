/* eslint-disable no-unused-vars */
import React from 'react'

export type SortableListData = {
  [key: string]: string | number
}

export interface SortableListDataWithCount {
  data: SortableListData[]
  count: number
}

export interface SortableListProps {
  headers: { label: string; property: keyof SortableListData; isSortable: boolean }[]
  tableData: SortableListDataWithCount
  TableRowComponent: React.FC<{ item: SortableListData }>
  MobileItemComponent: React.FC<{ item: SortableListData }>
  title: string
  handleSortOrderChange: (property: string) => void
  currentPage?: number
  handlePageChange?: (page: number) => void
  searchInputValue?: string
  handleSearchInputChange?: (value: string) => void
  sortBy?: keyof SortableListData
  sortOrder?: 'asc' | 'desc'
}
