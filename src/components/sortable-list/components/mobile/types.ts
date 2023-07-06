import React from 'react'

import { SortableListData } from '../../../../components/sortable-list/types'

export type SortableListMobileProps = {
  itemList: SortableListData[]
  MobileRowComponent: React.FC<{ item: SortableListData }>
}
