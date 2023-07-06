import { CardContent, Grid, useMediaQuery, useTheme } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

import { InformactiveBadge } from '../informactive-badge'
import { SearchInput } from '../search-input'

import { SortableListMobileComponent, SortableListTableComponent } from './components'
import { useStyles } from './styled'
import { SortableListData, SortableListProps } from './types'

const SortableList: React.FC<SortableListProps> = ({
  title,
  headers,
  tableData,
  TableRowComponent,
  MobileItemComponent,
  defaultSortBy,
}) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const classes = useStyles()
  const [sortBy, setSortBy] = useState<keyof SortableListData>(
    defaultSortBy || headers[0].property,
  )
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [filteredList, setFilteredList] = useState<SortableListData[]>(tableData)

  const handleSort = (property: keyof SortableListData) => {
    const newSortOrder = sortBy === property && sortOrder === 'asc' ? 'desc' : 'asc'
    setSortBy(property)
    setSortOrder(newSortOrder)
  }

  useEffect(() => {
    const sortedData = [...filteredList].sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return sortOrder === 'asc' ? -1 : 1
      }
      if (a[sortBy] > b[sortBy]) {
        return sortOrder === 'asc' ? 1 : -1
      }
      return 0
    })
    setFilteredList(sortedData)
  }, [sortBy, sortOrder])

  return (
    <CardContent className={classes.cardContent}>
      <Grid container spacing={2} alignItems="center">
        <InformactiveBadge
          title={title}
          counter={tableData.length}
          backgroundColor="var(--orange-color)"
        />
        <SearchInput list={tableData} setFilteredList={setFilteredList} />
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs>
          {isMobile ? (
            <SortableListMobileComponent
              itemList={filteredList}
              MobileRowComponent={MobileItemComponent}
            />
          ) : (
            <SortableListTableComponent
              headers={headers}
              itemsList={filteredList}
              TableRowComponent={TableRowComponent}
              sortBy={sortBy}
              sortOrder={sortOrder}
              handleSort={handleSort}
            />
          )}
        </Grid>
      </Grid>
    </CardContent>
  )
}

export default SortableList
