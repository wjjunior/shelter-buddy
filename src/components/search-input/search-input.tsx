import { Grid, InputAdornment, SvgIcon, TextField } from '@material-ui/core'
import SearchIcon from '@mui/icons-material/Search'
import React, { useEffect, useState } from 'react'

import { useStyles } from './styled'
import { SearchInputProps } from './types'

const SearchInput: React.FC<SearchInputProps> = ({ list, setFilteredList }) => {
  const classes = useStyles()
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    const filteredList = list.filter(el => {
      const name = String(el.name)
      return name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    setFilteredList(filteredList)
  }, [searchTerm, list, setFilteredList])

  return (
    <Grid item xs={12} sm={6} md={5}>
      <TextField
        placeholder="Search an animal by name"
        variant="outlined"
        fullWidth
        className={classes.searchInput}
        onChange={handleSearch}
        value={searchTerm}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SvgIcon style={{ color: 'rgb(161, 162, 175)', fontSize: 16 }}>
                <SearchIcon />
              </SvgIcon>
            </InputAdornment>
          ),
        }}
      />
    </Grid>
  )
}

export default SearchInput
