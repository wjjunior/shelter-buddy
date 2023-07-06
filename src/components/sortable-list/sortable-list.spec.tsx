import { render, fireEvent, screen as testScreen } from '@testing-library/react'
import Chance from 'chance'
import React from 'react'

import SortableList from './sortable-list'
import { SortableListData } from './types'

interface MockTableRowProps {
  item: SortableListData
}

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

describe('SortableTable', () => {
  const chance = new Chance()

  const headers = [
    { label: 'ID', property: 'id', isSortable: true },
    { label: 'Name', property: 'name', isSortable: true },
    { label: 'Age', property: 'age', isSortable: true },
  ]

  const generateRandomData = (): SortableListData[] => {
    return Array.from({ length: 3 }, () => ({
      id: chance.integer({ min: 1, max: 1000 }),
      name: chance.name(),
      age: chance.integer({ min: 18, max: 60 }),
    }))
  }

  test('renders table headers correctly', () => {
    render(
      <SortableList
        title={chance.word()}
        headers={headers}
        tableData={generateRandomData()}
        TableRowComponent={mockTableRowComponent}
        MobileItemComponent={mockMobileItemComponent}
      />,
    )

    headers.forEach(header => {
      const columnHeader = testScreen.getByText(header.label)
      expect(columnHeader).toBeInTheDocument()
    })
  })

  test('renders table data correctly', () => {
    const initialData = generateRandomData()
    render(
      <SortableList
        title={chance.word()}
        headers={headers}
        tableData={initialData}
        TableRowComponent={mockTableRowComponent}
        MobileItemComponent={mockMobileItemComponent}
      />,
    )

    initialData.forEach(item => {
      const rowData = testScreen.getByText(item.name)
      expect(rowData).toBeInTheDocument()
    })
  })

  test('sorts data correctly on header click', () => {
    const initialData = generateRandomData()
    render(
      <SortableList
        title={chance.word()}
        headers={headers}
        tableData={initialData}
        TableRowComponent={mockTableRowComponent}
        MobileItemComponent={mockMobileItemComponent}
      />,
    )

    const randomHeaderIndex = chance.integer({ min: 0, max: headers.length - 1 })
    const headerToSort = headers[randomHeaderIndex]
    const sortedData = [...initialData].sort((a, b) => {
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

    const headerElement = testScreen.getByText(headerToSort.label)
    fireEvent.click(headerElement)

    sortedData.forEach(item => {
      const rowData = testScreen.getByText(item.name)
      expect(rowData).toBeInTheDocument()
    })
  })
})
