import { ApolloClient, NormalizedCacheObject } from '@apollo/client'

import { AnimalStore } from './animal-store'

const mockApolloClient: ApolloClient<NormalizedCacheObject> =
  {} as ApolloClient<NormalizedCacheObject>

describe('AnimalStore', () => {
  let animalStore: AnimalStore

  beforeEach(() => {
    animalStore = new AnimalStore(mockApolloClient)
  })

  test('should initialize with correct default values', () => {
    expect(animalStore.animalList).toEqual({ data: [], count: 0 })
    expect(animalStore.totalAnimalCount).toBe(0)
    expect(animalStore.loading).toBe(false)
    expect(animalStore.error).toBeNull()
  })

  test('should update animalList when fetchAnimals is called successfully', async () => {
    const mockResponse = {
      data: {
        animals: {
          edges: [
            { node: { id: 1, name: 'Animal 1', animalType: { name: 'Type 1' } } },
            { node: { id: 2, name: 'Animal 2', animalType: { name: 'Type 2' } } },
          ],
          totalCount: 2,
        },
      },
    }

    mockApolloClient.query = jest.fn().mockResolvedValue(mockResponse)

    const params = { params: { nameStartsWith: 'A', page: 1 }, order: [] }
    await animalStore.fetchAnimals(params)

    expect(animalStore.animalList).toEqual({
      data: [
        {
          id: 1,
          name: 'Animal 1',
          type: 'Type 1',
          breed: undefined,
          gender: undefined,
          color: undefined,
        },
        {
          id: 2,
          name: 'Animal 2',
          type: 'Type 2',
          breed: undefined,
          gender: undefined,
          color: undefined,
        },
      ],
      count: 2,
    })
    expect(animalStore.loading).toBe(false)
    expect(animalStore.error).toBeNull()
  })

  test('should update error when fetchAnimals encounters an error', async () => {
    const mockError = new Error('Fetch error')

    // Mock ApolloClient query function
    mockApolloClient.query = jest.fn().mockRejectedValue(mockError)

    const params = { params: { nameStartsWith: 'A', page: 1 }, order: [] }
    await animalStore.fetchAnimals(params)

    expect(animalStore.animalList).toEqual({ data: [], count: 0 })
    expect(animalStore.loading).toBe(false)
    expect(animalStore.error).toBe(mockError)
  })
})
