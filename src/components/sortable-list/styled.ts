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

export const StyledPaginationDiv = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  marginTop: '16px',
  alignItems: 'center',
  justifyContent: 'start',
}))

export const StyledThumbnailImg = styled('img')(() => ({
  width: '48px',
  height: '48px',
  borderRadius: '50px',
}))
