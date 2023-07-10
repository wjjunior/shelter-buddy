import { render } from '@testing-library/react'

import Loading from './loading'

const makeSut = () => render(<Loading />)

describe('Loading Component', () => {
  it('should render the loading component', () => {
    const { getByTestId } = makeSut()
    const loadingComponent = getByTestId('loading-component')

    expect(loadingComponent).toBeInTheDocument()
  })

  it('renders the CircularProgress component', () => {
    const { getByRole } = makeSut()
    const circularProgress = getByRole('progressbar')

    expect(circularProgress).toBeInTheDocument()
  })

  it('has the correct styles applied', () => {
    const { container } = makeSut()
    const gridContainer = container.firstChild

    expect(gridContainer).toHaveStyle('min-height: 100vh')
  })
})
