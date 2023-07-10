import { render, fireEvent } from '@testing-library/react'
import Chance from 'chance'

import SearchInput from './search-input'
import { SearchInputProps } from './types'

const chance = new Chance()

const makeSut = ({
  value = chance.word(),
  handleSearchInputChange = jest.fn(),
}: Partial<SearchInputProps> = {}) =>
  render(<SearchInput value={value} handleSearchInputChange={handleSearchInputChange} />)

describe('SearchInput Component', () => {
  test('should render the SearchInput component correctly', () => {
    const { getByPlaceholderText } = makeSut()

    const searchInput = getByPlaceholderText('Search an animal by name')
    expect(searchInput).toBeInTheDocument()
  })

  test('should call handleSearchInputChange when input value changes', () => {
    const handleSearchInputChange = jest.fn()
    const { getByPlaceholderText } = makeSut({ handleSearchInputChange })

    const searchInput = getByPlaceholderText('Search an animal by name')

    fireEvent.change(searchInput, { target: { value: 'Dog' } })

    expect(handleSearchInputChange).toHaveBeenCalledTimes(1)
    expect(handleSearchInputChange).toHaveBeenCalledWith('Dog')
  })

  test('should display the provided value in the input', () => {
    const value = 'Cat'
    const { getByPlaceholderText } = makeSut({ value })

    const searchInput = getByPlaceholderText('Search an animal by name')

    expect(searchInput).toHaveValue(value)
  })
})
