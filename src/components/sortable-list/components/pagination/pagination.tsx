import { Button } from '@material-ui/core'
import React from 'react'

import { useStyles } from './styled'
import { PaginationComponentProps } from './types'

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const classes = useStyles()

  const handlePageChange = (page: number) => {
    onPageChange(page)
  }

  const renderPaginationButtons = () => {
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
        >
          {page}
        </Button>
      )
    })
  }

  return <React.Fragment>{renderPaginationButtons()}</React.Fragment>
}

export default PaginationComponent
