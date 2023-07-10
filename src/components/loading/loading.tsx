import { CircularProgress, Grid } from '@material-ui/core'
import React from 'react'

const Loading: React.FC = () => (
  <Grid
    container
    justifyContent="center"
    alignItems="center"
    style={{ minHeight: '100vh' }}
    data-testid="loading-component"
  >
    <Grid item>
      <CircularProgress />
    </Grid>
  </Grid>
)

export default Loading
