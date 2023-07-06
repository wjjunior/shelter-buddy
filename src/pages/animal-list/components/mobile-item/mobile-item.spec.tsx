import { render } from '@testing-library/react'

import { mockAnimalList } from '../../../../mocks/mock-animal-list'

import AnimalListMobileItem from './mobile-item'

const mockItem = mockAnimalList(1)[0]

describe('AnimalListMobileItem', () => {
  test('renders the item details', () => {
    const { getByText } = render(<AnimalListMobileItem item={mockItem} />)

    expect(getByText(mockItem.type)).toBeInTheDocument()
    expect(getByText(mockItem.breed)).toBeInTheDocument()
    expect(getByText(mockItem.gender)).toBeInTheDocument()
    expect(getByText(mockItem.color)).toBeInTheDocument()
  })
})
