import { Table, TableBody } from '@material-ui/core'
import { render } from '@testing-library/react'

import { mockAnimalList } from '../../../../mocks/mock-animal-list'
import { Animal } from '../../../../store/types'

import AnimalListItem from './item'

const makeSut = (item: Animal) =>
  render(
    <Table>
      <TableBody>
        <AnimalListItem item={item} />
      </TableBody>
    </Table>,
  )

describe('AnimalListItem Component', () => {
  const mockItems = mockAnimalList(1)

  test('should render the animal item with correct values', () => {
    const item = mockItems[0]
    const { getByText } = makeSut(item)

    const nameCell = getByText(item.name)
    expect(nameCell).toBeInTheDocument()

    const typeCell = getByText(item.type)
    expect(typeCell).toBeInTheDocument()

    const breedCell = getByText(item.breed)
    expect(breedCell).toBeInTheDocument()

    const genderCell = getByText(item.gender)
    expect(genderCell).toBeInTheDocument()

    const colorCell = getByText(item.color)
    expect(colorCell).toBeInTheDocument()
  })

  test('should render the animal image with alt text', () => {
    const item = mockItems[0]
    const { getByAltText } = makeSut(item)

    const image = getByAltText(item.name)
    expect(image).toBeInTheDocument()
    expect(image.getAttribute('src')).toContain('placeholder.png')
  })

  test('should render the detail button', () => {
    const item = mockItems[0]
    const { getByText, getByTestId } = makeSut(item)

    const detailButton = getByText('Detail')
    expect(detailButton).toBeInTheDocument()

    const chevronIcon = getByTestId('ChevronRight')
    expect(chevronIcon).toBeInTheDocument()
  })
})
