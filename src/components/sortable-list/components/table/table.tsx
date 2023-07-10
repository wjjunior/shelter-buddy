import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@material-ui/core'
import React from 'react'

import { useStyles } from './styled'
import { SortableListTableProps } from './types'

const SortableListTableComponent: React.FC<SortableListTableProps> = ({
  headers,
  itemsList,
  TableRowComponent,
  sortBy,
  sortOrder,
  handleSort,
}) => {
  const classes = useStyles()
  return (
    <Table className={classes.sortableTable}>
      <TableHead>
        <TableRow>
          {headers.map((header, index) => (
            <TableCell key={index}>
              {header.isSortable ? (
                <TableSortLabel
                  active={sortBy === header.property}
                  direction={sortOrder}
                  onClick={() => handleSort(header.property as string)}
                >
                  {header.label}
                </TableSortLabel>
              ) : (
                header.label
              )}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {itemsList.map(item => (
          <TableRowComponent key={item.id} item={item} />
        ))}
      </TableBody>
    </Table>
  )
}

export default SortableListTableComponent
