import { render } from '@testing-library/react'

import Header from './header'

describe('Header component', () => {
  test('should render the header with logo', () => {
    const { getByAltText } = render(<Header />)
    const logoElement = getByAltText('Shelter Buddy logo')
    expect(logoElement).toBeInTheDocument()
  })

  test('should apply the correct styles to the logo', () => {
    const { getByAltText } = render(<Header />)
    const logoElement = getByAltText('Shelter Buddy logo')
    expect(logoElement).toHaveStyle('max-width: 100%')
  })
})
