import React from 'react'

import Logo from '../../assets/images/logo.svg'

import { StyledHeader, StyledLogo } from './styled'

const HeaderLogo: React.FC = () => (
  <StyledHeader>
    <StyledLogo src={Logo} alt="Shelter Buddy logo" />
  </StyledHeader>
)

export default HeaderLogo
