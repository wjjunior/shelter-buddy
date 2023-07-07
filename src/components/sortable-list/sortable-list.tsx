import { CardContent, Grid, useMediaQuery, useTheme } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

import { SORTABLE_LIST_ITEMS_PER_PAGE } from '../../utils/constants'
import { InformactiveBadge } from '../informactive-badge'
import { SearchInput } from '../search-input'

import {
  SortableListMobileComponent,
  SortableListTableComponent,
  PaginationComponent,
} from './components'
import { StyledPaginationDiv, useStyles } from './styled'
import { SortableListData, SortableListProps } from './types'

const SortableList: React.FC<SortableListProps> = ({
  title,
  headers,
  tableData,
  TableRowComponent,
  MobileItemComponent,
  defaultSortBy,
}) => {
  const itemsPerPage = SORTABLE_LIST_ITEMS_PER_PAGE
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const classes = useStyles()

  const [sortBy, setSortBy] = useState<keyof SortableListData>(
    defaultSortBy || headers[0].property,
  )
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [filteredList, setFilteredList] = useState<SortableListData[]>(tableData)
  const [currentPage, setCurrentPage] = useState<number>(1)

  const totalPages = Math.ceil(filteredList.length / itemsPerPage)

  const handleSort = (property: keyof SortableListData) => {
    const newSortOrder = sortBy === property && sortOrder === 'asc' ? 'desc' : 'asc'
    setSortBy(property)
    setSortOrder(newSortOrder)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const getPaginatedData = (): SortableListData[] => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return filteredList.slice(startIndex, endIndex)
  }

  useEffect(() => {
    setFilteredList(prevList => {
      const sortedData = [...prevList].sort((a, b) => {
        if (a[sortBy] < b[sortBy]) {
          return sortOrder === 'asc' ? -1 : 1
        }
        if (a[sortBy] > b[sortBy]) {
          return sortOrder === 'asc' ? 1 : -1
        }
        return 0
      })
      return sortedData
    })
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
              itemList={getPaginatedData()}
              MobileRowComponent={MobileItemComponent}
            />
          ) : (
            <SortableListTableComponent
              headers={headers}
              itemsList={getPaginatedData()}
              TableRowComponent={TableRowComponent}
              sortBy={sortBy}
              sortOrder={sortOrder}
              handleSort={handleSort}
            />
          )}
        </Grid>
        <StyledPaginationDiv data-testid="pagination-component">
          <PaginationComponent
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </StyledPaginationDiv>
      </Grid>
    </CardContent>
  )
}

export default SortableList
