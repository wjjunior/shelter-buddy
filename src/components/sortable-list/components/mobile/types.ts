import React from 'react'

import { ListModel } from '../../../../domain/models'
export interface SortableListMobileProps {
  itemList: ListModel[]
  MobileRowComponent: React.FC<{ item: ListModel }>
}
