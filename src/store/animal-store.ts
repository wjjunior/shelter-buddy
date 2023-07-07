import { observable, action, makeObservable } from 'mobx'

import { mockAnimalList } from '../mocks/mock-animal-list'

import { Animal } from './types'

export class AnimalStore {
  animals: Animal[] = []
  loading = false
  error: Error | null = null

  constructor() {
    makeObservable(this, {
      animals: observable,
      loading: observable,
      error: observable,
      fetchAnimals: action,
    })
  }

  async fetchAnimals() {
    this.loading = true
    try {
      const mockedResponse = mockAnimalList(50)
      await new Promise(resolve => setTimeout(resolve, 1000))
      this.animals = mockedResponse
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.error = error
      } else {
        this.error = new Error('An unknown error occurred')
      }
    } finally {
      this.loading = false
    }
  }
}

const animalStore = new AnimalStore()
export default animalStore
