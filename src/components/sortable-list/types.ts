import React from 'react'

export interface SortableListData {
  [key: string]: string | number
}

export type SortableListProps = {
  headers: { label: string; property: keyof SortableListData; isSortable: boolean }[]
  tableData: SortableListData[]
  TableRowComponent: React.FC<{ item: SortableListData }>
  MobileItemComponent: React.FC<{ item: SortableListData }>
  defaultSortBy?: keyof SortableListData
  title: string
}
