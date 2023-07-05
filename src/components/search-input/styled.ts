import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(() => ({
  searchInput: {
    border: '0',
    borderRadius: '12px',
    backgroundColor: '#F4F4F7',
    '& input': {
      color: '#a1a2af',
      padding: '12px 0',
      fontSize: '14px',
    },
    '& fieldset': {
      border: '0',
    },
  },
}))
