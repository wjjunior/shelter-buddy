import { AnimalStore } from './animal-store'

describe('AnimalStore', () => {
  let animalStore: AnimalStore

  beforeEach(() => {
    animalStore = new AnimalStore()
  })

  test('should initialize with empty animals array', () => {
    expect(animalStore.animals).toEqual([])
  })

  test('should have loading set to false initially', () => {
    expect(animalStore.loading).toBe(false)
  })

  test('should have error set to null initially', () => {
    expect(animalStore.error).toBe(null)
  })
})
