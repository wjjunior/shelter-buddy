import { useMediaQuery } from '@material-ui/core'
import { render, fireEvent, screen as testScreen } from '@testing-library/react'
import Chance from 'chance'
import React from 'react'

import { mockAnimalList } from '../../mocks/mock-animal-list'
import { SORTABLE_LIST_ITEMS_PER_PAGE } from '../../utils/constants'

import SortableList from './sortable-list'
import { SortableListData, SortableListProps } from './types'

jest.mock('@material-ui/core', () => ({
  ...jest.requireActual('@material-ui/core'),
  useMediaQuery: jest.fn(),
}))
interface MockTableRowProps {
  item: SortableListData
}

const chance = new Chance()

const mockHeaders = [
  { label: 'Id', property: 'id', isSortable: false },
  { label: 'Name', property: 'name', isSortable: true },
  { label: 'Type', property: 'type', isSortable: true },
  { label: 'Breed', property: 'breed', isSortable: true },
  { label: 'Gender', property: 'gender', isSortable: true },
  { label: 'Color', property: 'color', isSortable: true },
  { label: 'Button', property: 'detail', isSortable: false },
]

const mockTableRowComponent: React.FC<MockTableRowProps> = ({ item }) => (
  <tr>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.age}</td>
  </tr>
)

const mockMobileItemComponent: React.FC<MockTableRowProps> = ({ item }) => (
  <ul>
    <li> {item.id}</li>
    <li> {item.name}</li>
    <li> {item.age}</li>
  </ul>
)

const makeSut = ({
  title = chance.word(),
  headers = mockHeaders,
  tableData = mockAnimalList(3),
  TableRowComponent = mockTableRowComponent,
  MobileItemComponent = mockMobileItemComponent,
}: Partial<SortableListProps> = {}) =>
  render(
    <SortableList
      title={title}
      headers={headers}
      tableData={tableData}
      TableRowComponent={TableRowComponent}
      MobileItemComponent={MobileItemComponent}
    />,
  )

describe('SortableTable Component', () => {
  test('should render table headers correctly', () => {
    const { getByText } = makeSut()

    mockHeaders.forEach(header => {
      const columnHeader = getByText(header.label)
      expect(columnHeader).toBeInTheDocument()
    })
  })

  test('should render table data correctly', () => {
    const tableData = mockAnimalList(3)
    const { getByText } = makeSut({ tableData })

    tableData.forEach(item => {
      const rowData = getByText(item.name)
      expect(rowData).toBeInTheDocument()
    })
  })

  test('should sort data correctly on header click', () => {
    const tableData = mockAnimalList(3)
    const { getByText } = makeSut({ tableData })

    const randomHeaderIndex = chance.integer({ min: 0, max: mockHeaders.length - 1 })
    const headerToSort = mockHeaders[randomHeaderIndex]
    const sortedData = [...tableData].sort((a, b) => {
      const prop = headerToSort.property
      const propA = a[prop] as string | number
      const propB = b[prop] as string | number

      if (typeof propA === 'number' && typeof propB === 'number') {
        return propA - propB
      }

      if (typeof propA === 'string' && typeof propB === 'string') {
        return propA.localeCompare(propB)
      }

      return 0
    })

    const headerElement = getByText(headerToSort.label)
    fireEvent.click(headerElement)

    sortedData.forEach(item => {
      const rowData = testScreen.getByText(item.name)
      expect(rowData).toBeInTheDocument()
    })
  })

  test('should render the pagination component', () => {
    const { getByTestId } = makeSut()

    const paginationComponent = getByTestId('pagination-component')
    expect(paginationComponent).toBeInTheDocument()
  })

  it('should render SortableListMobileComponent when isMobile is true', () => {
    ;(useMediaQuery as unknown as jest.Mock).mockReturnValue(true)

    const MobileItemComponent: React.FC<MockTableRowProps> = ({ item }) => (
      <ul>
        <li>{item.id}</li>
        <li>{item.name}</li>
        <li>{item.age}</li>
        <li>Mobile Item</li>
      </ul>
    )

    const { getByText } = makeSut({
      tableData: mockAnimalList(1),
      MobileItemComponent,
    })

    expect(getByText('Mobile Item')).toBeInTheDocument()
  })

  it('should render SortableListTableComponent when isMobile is false', () => {
    ;(useMediaQuery as unknown as jest.Mock).mockReturnValue(false)

    const TableRowComponent: React.FC<MockTableRowProps> = ({ item }) => (
      <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.age}</td>
        <td>Table Row</td>
      </tr>
    )

    const { getByText } = makeSut({
      tableData: mockAnimalList(1),
      TableRowComponent,
    })

    expect(getByText('Table Row')).toBeInTheDocument()
  })

  test('should render the correct number of items per page', () => {
    const tableData = mockAnimalList(11)
    const { getAllByTestId } = makeSut({
      tableData,
      TableRowComponent: ({ item }) => (
        <tr data-testid="item-component">
          <td>{item.id}</td>
          <td>{item.name}</td>
        </tr>
      ),
    })

    const itemsPerPage = Math.min(tableData.length, SORTABLE_LIST_ITEMS_PER_PAGE)

    const items = getAllByTestId('item-component')
    expect(items).toHaveLength(itemsPerPage)
  })

  test('should render pagination buttons correctly', () => {
    const tableData = mockAnimalList(11)
    const { getAllByTestId } = makeSut({
      tableData,
    })

    const paginationButtons = getAllByTestId('pagination-button')

    const totalPages = Math.ceil(tableData.length / SORTABLE_LIST_ITEMS_PER_PAGE)
    expect(paginationButtons).toHaveLength(totalPages)
    expect(paginationButtons[0]).toHaveClass('makeStyles-activeButton-82')
  })
})
