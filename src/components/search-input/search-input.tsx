import { Grid, InputAdornment, SvgIcon, TextField } from '@material-ui/core'
import SearchIcon from '@mui/icons-material/Search'
import React from 'react'

import { useStyles } from './styled'
import { SearchInputProps } from './types'

const SearchInput: React.FC<SearchInputProps> = ({ value, handleSearchInputChange }) => {
  const classes = useStyles()

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleSearchInputChange(event.target.value)
  }

  return (
    <Grid item xs={12} sm={6} md={5}>
      <TextField
        placeholder="Search an animal by name"
        variant="outlined"
        fullWidth
        className={classes.searchInput}
        onChange={handleSearch}
        value={value}
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
