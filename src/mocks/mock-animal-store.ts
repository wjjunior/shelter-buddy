import { Animal } from '../store/types'

import { mockAnimalList } from './mock-animal-list'

export const mockAnimalStore = {
  animals: [] as Animal[],

  async fetchAnimals() {
    this.animals = mockAnimalList(2)
  },
}
