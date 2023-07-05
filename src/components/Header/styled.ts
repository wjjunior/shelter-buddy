import { styled } from '@mui/system'

export const StyledHeader = styled('header')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  margin: `${theme.spacing(12)} 0`,
}))

export const StyledLogo = styled('img')(({ theme }) => ({
  maxWidth: '100%',
  [theme.breakpoints.down(900)]: {
    maxWidth: 206,
  },
}))
