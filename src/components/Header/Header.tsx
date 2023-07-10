import React from 'react'

import Logo from '../../assets/images/logo.svg'

import { StyledHeader, StyledLogo } from './styled'

const Header: React.FC = () => (
  <StyledHeader>
    <StyledLogo src={Logo} alt="Shelter Buddy logo" />
  </StyledHeader>
)

export default Header
