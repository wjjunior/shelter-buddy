import { makeStyles } from '@material-ui/core/styles'
import { styled } from '@mui/system'

export const useStyles = makeStyles(() => ({
  cardContent: {
    padding: '32px !important',
  },
}))

export const StyledContainerDiv = styled('div')(() => ({
  marginTop: '30px',
}))

export const StyledDiv = styled('div')(() => ({
  width: '100%',
}))
