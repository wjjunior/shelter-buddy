import { CardContent, Grid, useMediaQuery, useTheme } from '@material-ui/core'
import React from 'react'

import { SORTABLE_LIST_ITEMS_PER_PAGE } from '../../utils/constants'
import { InformactiveBadge } from '../informactive-badge'
import { SearchInput } from '../search-input'

import {
  SortableListMobileComponent,
  SortableListTableComponent,
  PaginationComponent,
} from './components'
import { StyledPaginationDiv, useStyles } from './styled'
import { SortableListProps } from './types'

const SortableList: React.FC<SortableListProps> = ({
  title,
  headers,
  tableData,
  TableRowComponent,
  MobileItemComponent,
  handlePageChange,
  currentPage = 1,
  searchInputValue = '',
  handleSearchInputChange,
  handleSortOrderChange,
  sortBy = headers[0].property,
  sortOrder = 'asc',
}) => {
  const itemsPerPage = SORTABLE_LIST_ITEMS_PER_PAGE
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const classes = useStyles()

  const totalPages = Math.ceil(tableData.count / itemsPerPage)

  return (
    <CardContent className={classes.cardContent}>
      <Grid container spacing={2} alignItems="center">
        <InformactiveBadge
          title={title}
          counter={tableData.count}
          backgroundColor="var(--orange-color)"
        />
        {handleSearchInputChange && (
          <SearchInput
            value={searchInputValue}
            handleSearchInputChange={handleSearchInputChange}
          />
        )}
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs>
          {isMobile ? (
            <SortableListMobileComponent
              itemList={tableData.data}
              MobileRowComponent={MobileItemComponent}
            />
          ) : (
            <SortableListTableComponent
              headers={headers}
              itemsList={tableData.data}
              TableRowComponent={TableRowComponent}
              sortBy={sortBy}
              sortOrder={sortOrder}
              handleSort={handleSortOrderChange}
            />
          )}
        </Grid>
        <StyledPaginationDiv data-testid="pagination-component">
          {handlePageChange && (
            <PaginationComponent
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </StyledPaginationDiv>
      </Grid>
    </CardContent>
  )
}

export default SortableList
