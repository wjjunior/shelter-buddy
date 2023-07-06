import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
  sortableTable: {
    minWidth: '650px',
    borderSpacing: '0px 12px',
    borderCollapse: 'separate',
    '& th': {
      color: '#707183',
      border: 'none',
      fontSize: '16px',
      fontWeight: '500',
    },
  },
}))
