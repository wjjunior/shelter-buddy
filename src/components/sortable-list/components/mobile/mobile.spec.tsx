import { render } from '@testing-library/react'
import React from 'react'

import { ListModel } from '../../../../domain/models'
import { mockAnimalList } from '../../../../mocks/mock-animal-list'

import SortableListMobileComponent from './mobile'

const mockItemList = mockAnimalList(2)

type MockMobileRowComponentProps = {
  item: ListModel
}

const MockMobileRowComponent: React.FC<MockMobileRowComponentProps> = ({ item }) => (
  <div>
    <p>{item.name}</p>
  </div>
)

const makeSut = ({ itemList = mockItemList }: { itemList?: ListModel[] } = {}) =>
  render(
    <SortableListMobileComponent
      itemList={itemList}
      MobileRowComponent={MockMobileRowComponent}
    />,
  )

describe('SortableListMobileComponent', () => {
  it('should render the list items correctly', () => {
    const { getAllByText } = makeSut()

    const item1Name = getAllByText(mockItemList[0].name as string)
    const item2Name = getAllByText(mockItemList[1].name as string)

    expect(item1Name[1]).toBeInTheDocument()
    expect(item2Name[1]).toBeInTheDocument()
  })

  it('should render the item images correctly', () => {
    const itemList = [
      { id: 1, name: 'Item 1', img: 'image1.png' },
      { id: 2, name: 'Item 2', img: 'image2.png' },
    ]
    const { getByAltText } = makeSut({ itemList })

    const item1Image = getByAltText(itemList[0].name) as HTMLImageElement
    const item2Image = getByAltText(itemList[1].name) as HTMLImageElement

    expect(item1Image).toBeInTheDocument()
    expect(item1Image.src).toContain(itemList[0].img)
    expect(item2Image).toBeInTheDocument()
    expect(item2Image.src).toContain(itemList[1].img)
  })

  it('should render the MobileRowComponent for each item', () => {
    const { getAllByText } = makeSut()

    const item1RowComponent = getAllByText(mockItemList[0].name as string)[1]
      .parentElement
    const item2RowComponent = getAllByText(mockItemList[1].name as string)[1]
      .parentElement

    expect(item1RowComponent).toBeInTheDocument()
    expect(item2RowComponent).toBeInTheDocument()
  })
})
