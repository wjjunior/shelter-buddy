import { Grid } from '@material-ui/core'
import React from 'react'

import { StyledAnimalsBadge } from './styled'
import { InformactiveBadgeProps } from './types'

const InformactiveBadge: React.FC<InformactiveBadgeProps> = ({
  title,
  counter,
  backgroundColor,
}) => (
  <Grid item xs={true} sm={true}>
    <StyledAnimalsBadge backgroundColor={backgroundColor}>
      <h1>{title}</h1>
      <span data-testid="informactive-badge-span">{counter}</span>
    </StyledAnimalsBadge>
  </Grid>
)

export default InformactiveBadge
