import { Button, Grid } from '@material-ui/core'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import React from 'react'

import { useStyles } from './styled'
import { AnimalListMobileItemProps } from './types'

const AnimalListMobileItem: React.FC<AnimalListMobileItemProps> = ({ item }) => {
  const classes = useStyles()
  return (
    <Grid item xs className={classes.animalDetails}>
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
}

export default AnimalListMobileItem
