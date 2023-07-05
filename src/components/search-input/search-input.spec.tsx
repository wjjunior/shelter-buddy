import { render, fireEvent } from '@testing-library/react'
import Chance from 'chance'

import { mockAnimalList } from '../../mocks/mock-animal-list'
import { SortableTableData } from '../sortable-table/types'

import SearchInput from './search-input'

describe('SearchInput', () => {
  const chance = new Chance()

  const mockList = mockAnimalList(5) as unknown as SortableTableData[]

  test('renders the search input', () => {
    const setFilteredList = jest.fn()
    const { getByPlaceholderText } = render(
      <SearchInput list={mockList} setFilteredList={setFilteredList} />,
    )
    const searchInput = getByPlaceholderText('Search an animal by name')
    expect(searchInput).toBeInTheDocument()
  })

  test('updates search term on input change', () => {
    const setFilteredList = jest.fn()
    const { getByPlaceholderText } = render(
      <SearchInput list={mockList} setFilteredList={setFilteredList} />,
    )
    const searchInput = getByPlaceholderText(
      'Search an animal by name',
    ) as HTMLInputElement
    const inputValue = chance.word()
    fireEvent.change(searchInput, { target: { value: inputValue } })
    expect(searchInput.value).toBe(inputValue)
  })

  test('filters the list based on search term', () => {
    const setFilteredList = jest.fn()
    const { getByPlaceholderText } = render(
      <SearchInput list={mockList} setFilteredList={setFilteredList} />,
    )
    const searchInput = getByPlaceholderText(
      'Search an animal by name',
    ) as HTMLInputElement
    const searchTerm = chance.word({ length: 2 })
    fireEvent.change(searchInput, { target: { value: searchTerm } })
    const filteredList = mockList.filter(el => {
      const name = String(el.name)
      return name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    expect(setFilteredList).toHaveBeenCalledWith(filteredList)
  })
})
