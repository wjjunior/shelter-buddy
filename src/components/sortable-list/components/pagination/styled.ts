import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
  button: {
    width: '40px',
    height: '40px',
    margin: '4px',
    fontSize: '16px',
    fontWeight: 600,
    borderRadius: '50%',
    minWidth: 'initial',
  },
  activeButton: {
    color: '#002fd6 !important',
    backgroundColor: '#E0E7FD!important',
  },
  inactiveButton: {
    color: '#fff !important',
    backgroundColor: '#002fd6 !important',
  },
}))
