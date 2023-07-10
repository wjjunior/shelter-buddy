import { styled } from '@mui/system'

interface StyledAnimalsBadgeProps {
  backgroundColor: string
}

export const StyledAnimalsBadge = styled('div')<StyledAnimalsBadgeProps>(
  ({ backgroundColor }) => ({
    display: 'flex',
    alignItems: 'center',
    '& h1': {
      fontWeight: 600,
      fontSize: '22px',
    },
    '& span': {
      backgroundColor: backgroundColor,
      color: '#fff',
      borderRadius: '100px',
      padding: '4px 8px',
      fontSize: '14px',
      fontWeight: 600,
      margin: '0 8px',
    },
  }),
)
