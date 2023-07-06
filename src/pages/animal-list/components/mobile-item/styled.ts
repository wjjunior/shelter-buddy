import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
  animalDetails: {
    '& p': {
      color: '#000121',
      fontSize: '16px',
      fontWeight: 500,
      '& span': {
        color: '#707183',
      },
    },
    '& button': {
      fontSize: '16px',
      fontWeight: 600,
      borderRadius: '8px',
      backgroundColor: '#002fd6',
      textTransform: 'initial',
    },
  },
}))
