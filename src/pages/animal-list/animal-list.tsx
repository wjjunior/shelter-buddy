import { Button, Card, Grid, TableCell, TableRow, debounce } from '@material-ui/core'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { observer } from 'mobx-react'
import React from 'react'
import { useCallback, useEffect, useState } from 'react'

import PlaceholderImage from '../../assets/images/placeholder.png'
import { HeaderLogo, SortableList } from '../../components'
import { StyledThumbnailImg } from '../../components/sortable-list/styled'
import {
  SortableListData,
  SortableListDataWithCount,
} from '../../components/sortable-list/types'
import { useAnimalList } from '../../hooks'

import { StyledMainDiv, useStyles } from './styled'

const AnimalsList = observer(() => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [searchInputValue, setSearchInputValue] = useState<string>('')
  const [sortBy, setSortBy] = useState<string>('name')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

  const { loading, animalList } = useAnimalList({
    page: currentPage,
    nameStartsWith: searchInputValue,
    sortBy,
    sortOrder,
  })
  const classes = useStyles()

  const handlePageChange = useCallback((page: number): void => {
    setCurrentPage(page)
  }, [])

  const handleSearchInputChange = useCallback((value: string): void => {
    setSearchInputValue(value)
  }, [])

  const handleSortOrderChange = useCallback(
    (property: string): void => {
      const newSortOrder = sortBy === property && sortOrder === 'asc' ? 'desc' : 'asc'
      setSortOrder(newSortOrder)
      setSortBy(property)
    },
    [sortBy, sortOrder],
  )

  useEffect(() => {
    const debouncedSetNameStartsWith = debounce(setSearchInputValue, 1000)
    debouncedSetNameStartsWith(searchInputValue)
    return () => {
      debouncedSetNameStartsWith.clear()
    }
  }, [searchInputValue])

  const headers = [
    { label: '', property: 'id', isSortable: false },
    { label: 'Name', property: 'name', isSortable: true },
    { label: 'Type', property: 'type', isSortable: true },
    { label: 'Breed', property: 'breed', isSortable: true },
    { label: 'Gender', property: 'gender', isSortable: true },
    { label: 'Color', property: 'color', isSortable: true },
    { label: '', property: 'detail', isSortable: false },
  ]

  const MobileItemComponent = ({ item }: { item: SortableListData }) => (
    <Grid item xs className={classes.mobileAnimalDetails}>
      <p>
        <span>Type:</span> {item.type}
      </p>
      <p>
        <span>Breed:</span> {item.breed}
      </p>
      <p>
        <span>Gender:</span> {item.gender}
      </p>
      <p>
        <span>Color:</span> {item.color}
      </p>
      <Button
        variant="contained"
        color="primary"
        size="large"
        fullWidth
        endIcon={<ChevronRightIcon />}
      >
        Details
      </Button>
    </Grid>
  )

  const TableRowComponent = ({ item }: { item: SortableListData }) => (
    <TableRow className={classes.animalDetails}>
      <TableCell align="left">
        <StyledThumbnailImg
          src={(item.img as string) || PlaceholderImage}
          alt={(item.name as string) || ''}
          onError={(event: React.SyntheticEvent<HTMLImageElement>) =>
            (event.currentTarget.src = PlaceholderImage)
          }
        />
      </TableCell>
      <TableCell align="left">{item.name}</TableCell>
      <TableCell align="left">{item.type}</TableCell>
      <TableCell align="left">{item.breed}</TableCell>
      <TableCell align="left">{item.gender}</TableCell>
      <TableCell align="left">{item.color}</TableCell>
      <TableCell align="left">
        <Button variant="text" color="primary">
          Detail
          <ChevronRightIcon data-testid="ChevronRight" />
        </Button>
      </TableCell>
    </TableRow>
  )

  return (
    <>
      <HeaderLogo />
      <StyledMainDiv>
        <Grid container spacing={2}>
          <Grid item xs={true}>
            <Card elevation={0} className={classes.card}>
              <SortableList
                title="Your Animals"
                headers={headers}
                tableData={animalList as SortableListDataWithCount}
                TableRowComponent={TableRowComponent}
                MobileItemComponent={MobileItemComponent}
                sortBy={sortBy}
                sortOrder={sortOrder}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
                searchInputValue={searchInputValue}
                handleSearchInputChange={handleSearchInputChange}
                handleSortOrderChange={handleSortOrderChange}
                isLoading={loading}
              />
            </Card>
          </Grid>
        </Grid>
      </StyledMainDiv>
    </>
  )
})

export default AnimalsList
