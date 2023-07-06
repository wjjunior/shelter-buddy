import { render } from '@testing-library/react'

import { mockAnimalList } from '../../../../mocks/mock-animal-list'

import AnimalListMobileItemComponent from './mobile-item'

const mockItem = mockAnimalList(1)[0]

describe('AnimalListMobileItem Component', () => {
  test('should render the item details', () => {
    const { getByText } = render(<AnimalListMobileItemComponent item={mockItem} />)

    expect(getByText(mockItem.type)).toBeInTheDocument()
    expect(getByText(mockItem.breed)).toBeInTheDocument()
    expect(getByText(mockItem.gender)).toBeInTheDocument()
    expect(getByText(mockItem.color)).toBeInTheDocument()
  })
})
