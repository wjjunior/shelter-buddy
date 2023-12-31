import Chance from 'chance'

import { Animal } from '../domain/models'

export const mockAnimalList = (length = 5): Animal[] => {
  const chance = new Chance()
  return Array.from({ length }, () => ({
    id: chance.integer({ min: 1, max: 1000 }),
    name: chance.name(),
    type: chance.word(),
    breed: chance.word(),
    gender: chance.pickone(['Male', 'Female']),
    color: chance.word(),
  }))
}
