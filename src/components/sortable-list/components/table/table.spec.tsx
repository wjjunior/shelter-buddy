import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Chance from 'chance'

import { mockAnimalList } from '../../../../mocks/mock-animal-list'

import SortableListTableComponent from './table'
import { SortableListTableProps } from './types'

const chance = new Chance()

const mockHeaders = [
  { label: chance.word(), property: chance.word(), isSortable: chance.bool() },
  { label: chance.word(), property: chance.word(), isSortable: chance.bool() },
  { label: chance.word(), property: chance.word(), isSortable: chance.bool() },
  { label: chance.word(), property: chance.word(), isSortable: chance.bool() },
  { label: chance.word(), property: chance.word(), isSortable: chance.bool() },
  { label: chance.word(), property: chance.word(), isSortable: chance.bool() },
  { label: chance.word(), property: chance.word(), isSortable: chance.bool() },
]

const mockItemsList = mockAnimalList(3)

const makeSut = ({
  headers = mockHeaders,
  itemsList = mockItemsList,
  TableRowComponent = () => null,
  sortBy = mockHeaders[0].property,
  sortOrder = 'asc',
  handleSort = jest.fn(),
}: Partial<SortableListTableProps> = {}) =>
  render(
    <SortableListTableComponent
      headers={headers}
      itemsList={itemsList}
      TableRowComponent={TableRowComponent}
      sortBy={sortBy}
      sortOrder={sortOrder}
      handleSort={handleSort}
    />,
  )

describe('SortableListTableComponent', () => {
  test('should render the table headers', () => {
    const handleSort = jest.fn()
    const { getByText } = makeSut({ handleSort })

    const firstHeader = getByText(mockHeaders[0].label)
    expect(firstHeader).toBeInTheDocument()

    const secondHeader = getByText(mockHeaders[1].label)
    expect(secondHeader).toBeInTheDocument()

    const thirdHeader = getByText(mockHeaders[2].label)
    expect(thirdHeader).toBeInTheDocument()
  })

  test('should render the table rows with the provided component', () => {
    const TableRowComponent = jest.fn(() => null)
    makeSut({ TableRowComponent })

    expect(TableRowComponent).toHaveBeenCalledTimes(mockItemsList.length)
  })

  test('should call the handleSort function on header click', () => {
    const handleSort = jest.fn()
    const { getByText } = makeSut({ handleSort })

    const firstHeader = getByText(mockHeaders[0].label)
    userEvent.click(firstHeader)

    expect(handleSort).toHaveBeenCalledWith(mockHeaders[0].property)
  })
})
