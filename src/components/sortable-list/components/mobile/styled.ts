import { makeStyles } from '@material-ui/core/styles'
import { styled } from '@mui/system'

export const useStyles = makeStyles(() => ({
  accordion: {
    margin: '12px 0',
    borderRadius: '12px !important',
    backgroundColor: '#f8f8fc',
    '&:before': {
      content: 'none',
    },
  },
  accordionSummary: {
    '& .MuiAccordionSummary-content': {
      margin: '16px 0!important',
    },
    '& .Mui-expanded': {
      marginBottom: '0 !important',
    },
    '& img': {
      width: '40px',
      height: '40px',
    },
    '& h2': {
      fontSize: '16px',
      fontWeight: 500,
    },
  },
  chevronDownIcon: {
    color: '#fff',
    borderRadius: '100px',
    backgroundColor: '#002fd6',
  },
  accordionDetails: {
    padding: '16px',
    paddingTop: 0,
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

export const StyledContainerDiv = styled('div')(() => ({
  marginTop: '30px',
}))

export const StyledDiv = styled('div')(() => ({
  width: '100%',
}))
