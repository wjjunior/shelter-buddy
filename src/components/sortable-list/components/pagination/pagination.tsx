import { Button, TablePagination } from '@material-ui/core'
import React from 'react'

import { SORTABLE_LIST_ITEMS_PER_PAGE } from '../../../../utils/constants'

import { useStyles } from './styled'
import { PaginationComponentProps } from './types'

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  currentPage,
  count,
  onPageChange,
  isMobile = false,
}) => {
  const classes = useStyles()

  const handlePageChange = (page: number) => {
    onPageChange(page)
  }

  const renderPaginationButtons = () => {
    if (isMobile) {
      return (
        <TablePagination
          component="div"
          count={count}
          rowsPerPage={SORTABLE_LIST_ITEMS_PER_PAGE}
          page={currentPage - 1}
          onPageChange={(_event: unknown, newPage: number) => onPageChange(newPage + 1)}
          rowsPerPageOptions={[]}
          data-testid="table-pagination"
        />
      )
    }
    const totalPages = Math.ceil(count / SORTABLE_LIST_ITEMS_PER_PAGE)
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

    return pages.map(page => {
      const isActive = currentPage === page
      const buttonClass = isActive ? classes.activeButton : classes.inactiveButton

      return (
        <Button
          key={page}
          className={`${classes.button} ${buttonClass}`}
          variant={isActive ? 'contained' : 'outlined'}
          onClick={() => handlePageChange(page)}
          data-testid="pagination-button"
        >
          {page}
        </Button>
      )
    })
  }

  return <React.Fragment>{renderPaginationButtons()}</React.Fragment>
}

export default PaginationComponent
