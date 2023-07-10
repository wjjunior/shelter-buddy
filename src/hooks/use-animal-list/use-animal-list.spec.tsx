import { act, renderHook } from '@testing-library/react-hooks'

import animalStore from '../../store/animal-store/animal-store'

import useAnimalList from './use-animal-list'

jest.mock('../../store/animal-store/animal-store', () => ({
  fetchAnimals: jest.fn(),
  animalList: { data: [], count: 0 },
}))

describe('useAnimalList', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should fetch animals and update animalList on mount', async () => {
    const mockFetchAnimals = jest.spyOn(animalStore, 'fetchAnimals')
    const params = { page: 1, nameStartsWith: 'A', sortBy: 'name', sortOrder: 'asc' }

    await act(async () => {
      renderHook(() => useAnimalList(params))
    })

    expect(mockFetchAnimals).toHaveBeenCalledWith({
      params,
      after: 'LTE=',
      order: [{ name: 'ASC' }],
    })
    expect(animalStore.animalList).toEqual({ data: [], count: 0 })
  })

  it('should set loading to true while fetching animals', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useAnimalList({ page: 1 }))

    expect(result.current.loading).toBe(true)

    await waitForNextUpdate()

    expect(result.current.loading).toBe(false)
  })

  it('should set the error state if an error occurs while fetching animals', async () => {
    const mockError = new Error('Failed to fetch animals')
    jest.spyOn(animalStore, 'fetchAnimals').mockRejectedValue(mockError)

    const { result, waitForNextUpdate } = renderHook(() => useAnimalList({ page: 1 }))

    await waitForNextUpdate()

    expect(result.current.error).toBe(mockError)
  })
})
