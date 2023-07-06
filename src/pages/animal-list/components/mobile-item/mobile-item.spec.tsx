import { render } from '@testing-library/react'

import { mockAnimalList } from '../../../../mocks/mock-animal-list'

import AnimalListMobileItem from './mobile-item'

const mockItem = mockAnimalList(1)[0]

describe('AnimalListMobileItem', () => {
  test('renders the item details', () => {
    const { getByText } = render(<AnimalListMobileItem item={mockItem} />)

    expect(getByText(`Type: ${mockItem.type}`)).toBeInTheDocument()
    expect(getByText(`Breed: ${mockItem.breed}`)).toBeInTheDocument()
    expect(getByText(`Gender: ${mockItem.gender}`)).toBeInTheDocument()
    expect(getByText(`Color: ${mockItem.color}`)).toBeInTheDocument()
  })
})
