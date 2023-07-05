import { render, screen as testScreen } from '@testing-library/react'
import Chance from 'chance'

import InformactiveBadge from './informactive-badge'
import { InformactiveBadgeProps } from './types'

const chance = new Chance()

const makeSut = ({
  title = chance.word(),
  counter = chance.integer({ min: 1, max: 100 }),
  backgroundColor = chance.color({ format: 'hex' }),
}: Partial<InformactiveBadgeProps> = {}) =>
  render(
    <InformactiveBadge
      title={title}
      counter={counter}
      backgroundColor={backgroundColor}
    />,
  )

describe('InformactiveBadge Component', () => {
  test('should render title and counter correctly', () => {
    const title = chance.word()
    const counter = chance.integer({ min: 1, max: 100 })
    makeSut({ title, counter })

    const titleElement = testScreen.getByText(title)
    const counterElement = testScreen.getByText(counter.toString())

    expect(titleElement).toBeInTheDocument()
    expect(counterElement).toBeInTheDocument()
  })

  test('should render with correct background color', () => {
    const backgroundColor = chance.color({ format: 'hex' })
    makeSut({ backgroundColor })

    const badgeElement = testScreen.getByTestId('informactive-badge-span')

    expect(badgeElement).toHaveStyle(`background-color: ${backgroundColor}`)
  })
})
