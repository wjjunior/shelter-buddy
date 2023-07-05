import Logo from '../../assets/images/logo.svg'

import { StyledHeader, StyledLogo } from './styled'

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo src={Logo} alt="Shelter Buddy logo" />
    </StyledHeader>
  )
}

export default Header
