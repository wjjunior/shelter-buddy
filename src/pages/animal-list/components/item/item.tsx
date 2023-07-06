import { Button, TableCell, TableRow } from '@material-ui/core'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import React from 'react'

import Placeholder from '../../../../assets/images/placeholder.png'

import { useStyles } from './styled'
import { AnimalListItemProps } from './types'

const AnimalListItemComponent: React.FC<AnimalListItemProps> = ({ item }) => {
  const classes = useStyles()
  return (
    <TableRow className={classes.row}>
      <TableCell align="left">
        <img src={Placeholder} alt={item.name as string} />
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
}

export default AnimalListItemComponent
