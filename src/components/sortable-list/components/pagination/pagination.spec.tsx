import { render, fireEvent } from '@testing-library/react'
import Chance from 'chance'

import PaginationComponent from './pagination'
import { PaginationComponentProps } from './types'

const chance = new Chance()

const onPageChange = jest.fn()

const makeSut = ({
  totalPages = chance.integer({ min: 1, max: 10 }),
  currentPage = chance.integer({ min: 1, max: totalPages }),
}: Partial<PaginationComponentProps> = {}) =>
  render(
    <PaginationComponent
      totalPages={totalPages}
      currentPage={currentPage}
      onPageChange={onPageChange}
    />,
  )

describe('PaginationComponent', () => {
  beforeEach(() => {
    onPageChange.mockClear()
  })

  test('renders pagination buttons with correct active and inactive states', () => {
    const totalPages = chance.integer({ min: 1, max: 10 })
    const currentPage = chance.integer({ min: 1, max: totalPages })
    const { getAllByRole } = makeSut({ totalPages, currentPage })

    const buttons = getAllByRole('button')

    expect(buttons).toHaveLength(totalPages)

    buttons.forEach((button, index) => {
      const pageNumber = index + 1
      const isActive = pageNumber === currentPage

      expect(button).toHaveTextContent(pageNumber.toString())

      if (isActive) {
        expect(button).toHaveClass('makeStyles-activeButton-2')
        expect(button).toHaveClass('MuiButton-contained')
      } else {
        expect(button).toHaveClass('makeStyles-inactiveButton-3')
        expect(button).toHaveClass('MuiButton-outlined')
      }
    })
  })

  test('calls onPageChange callback when a button is clicked', () => {
    const totalPages = chance.integer({ min: 1, max: 10 })

    const { getByText } = makeSut({ totalPages })

    const buttonIndex = chance.integer({ min: 0, max: totalPages - 1 })
    const button = getByText((buttonIndex + 1).toString())
    fireEvent.click(button)

    expect(onPageChange).toHaveBeenCalledTimes(1)
    expect(onPageChange).toHaveBeenCalledWith(buttonIndex + 1)
  })
})
