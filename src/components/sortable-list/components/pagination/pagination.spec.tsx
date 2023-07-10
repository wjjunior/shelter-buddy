import { render, fireEvent } from '@testing-library/react'
import Chance from 'chance'

import { SORTABLE_LIST_ITEMS_PER_PAGE } from '../../../../utils/constants'

import PaginationComponent from './pagination'
import { PaginationComponentProps } from './types'

const chance = new Chance()

const onPageChange = jest.fn()

const makeSut = ({
  count = chance.integer({ min: 11, max: 100 }),
  currentPage = 1,
  isMobile = false,
}: Partial<PaginationComponentProps> = {}) =>
  render(
    <PaginationComponent
      count={count}
      currentPage={currentPage}
      onPageChange={onPageChange}
      isMobile={isMobile}
    />,
  )

describe('PaginationComponent', () => {
  beforeEach(() => {
    onPageChange.mockClear()
  })

  test('renders pagination buttons with correct active and inactive states', () => {
    const count = chance.integer({ min: 11, max: 100 })
    const currentPage = 1
    const totalPages = Math.ceil(count / SORTABLE_LIST_ITEMS_PER_PAGE)

    const { getAllByTestId } = makeSut({ count, currentPage })

    const paginationButtons = getAllByTestId('pagination-button')
    expect(paginationButtons).toHaveLength(totalPages)
    expect(paginationButtons[0]).toHaveTextContent('1')
    expect(paginationButtons[0]).toHaveClass('makeStyles-activeButton-2')
  })

  test('calls onPageChange callback when a button is clicked', () => {
    const { getByText } = makeSut()

    const paginationButton = getByText('1')
    fireEvent.click(paginationButton)

    expect(onPageChange).toHaveBeenCalledWith(1)
  })

  test('should render the TablePagination component when isMobile is true', () => {
    const { getByTestId } = makeSut({ isMobile: true })

    const tablePagination = getByTestId('table-pagination')
    expect(tablePagination).toBeInTheDocument()
  })
})
