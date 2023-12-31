import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from '@material-ui/core'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import React from 'react'

import PlaceholderImage from '../../../../assets/images/placeholder.png'
import { ListModel } from '../../../../domain/models'
import { StyledThumbnailImg } from '../../styled'

import { StyledContainerDiv, StyledDiv, useStyles } from './styled'
import { SortableListMobileProps } from './types'

const SortableListMobileComponent: React.FC<SortableListMobileProps> = ({
  itemList,
  MobileRowComponent,
}) => {
  const classes = useStyles()

  return (
    <StyledContainerDiv>
      <StyledDiv>
        {itemList.map((item: ListModel) => (
          <Accordion key={item.id} className={classes.accordion} elevation={0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={classes.chevronDownIcon} />}
              aria-controls="content"
              id="header"
              className={classes.accordionSummary}
            >
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <StyledThumbnailImg
                    src={(item.img as string) || PlaceholderImage}
                    alt={(item.name as string) || ''}
                    onError={(event: React.SyntheticEvent<HTMLImageElement>) =>
                      (event.currentTarget.src = PlaceholderImage)
                    }
                  />
                </Grid>
                <Grid item xs>
                  <Typography variant="h2">{item.name || ''}</Typography>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails}>
              <Grid container spacing={2}>
                <MobileRowComponent item={item} />
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))}
      </StyledDiv>
    </StyledContainerDiv>
  )
}

export default SortableListMobileComponent
