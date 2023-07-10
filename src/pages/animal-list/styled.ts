import { makeStyles } from '@material-ui/core/styles'
import { styled } from '@mui/system'

export const useStyles = makeStyles(() => ({
  card: {
    borderRadius: '12px',
    margin: 'inherit',
  },
  cardContent: {
    padding: '32px !important',
  },
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
  animalsTable: {
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
  mobileAnimalDetails: {
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
  animalDetails: {
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

export const StyledMainDiv = styled('main')(({ theme }) => ({
  padding: '0 96px',
  margin: '96px 0',
  [theme.breakpoints.down(900)]: {
    padding: '0 16px',
    margin: '58px 0',
  },
}))
