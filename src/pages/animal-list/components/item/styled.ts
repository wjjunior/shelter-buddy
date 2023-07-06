import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
  row: {
    backgroundColor: '#f8f8fc',
    '& td:first-child': {
      borderTopLeftRadius: '12px',
      borderBottomLeftRadius: '12px',
    },
    '& td:last-child': {
      borderTopRightRadius: '12px',
      borderBottomRightRadius: '12px',
    },
    '& td': {
      color: '#000121',
      border: 'none',
      padding: '12px',
      fontSize: '16px',
      fontWeight: 500,
    },
    '& button': {
      color: '#002fd6',
      fontSize: '16px',
      fontWeight: 600,
      textTransform: 'initial',
    },
    '& img': {
      width: '48px',
      height: '48px',
      borderRadius: '50px',
    },
  },
}))
