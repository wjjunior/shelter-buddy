import { renderHook } from '@testing-library/react-hooks'

import { mockAnimalStore } from '../mocks/mock-animal-store'

import useAnimalList from './use-animal-list'

jest.mock('../store/animal-store', () => mockAnimalStore)

describe('useAnimalList', () => {
  test('should fetch animals successfully', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useAnimalList())

    expect(result.current.loading).toBe(true)
    expect(result.current.error).toBeNull()
    expect(result.current.animals).toEqual([])

    await waitForNextUpdate()

    expect(result.current.loading).toBe(false)
    expect(result.current.error).toBeNull()
    expect(result.current.animals).toEqual(mockAnimalStore.animals)
  })

  test('should handle fetch animals error', async () => {
    const mockError = new Error('Failed to fetch animals')

    // Override the fetchAnimals method to throw an error
    mockAnimalStore.fetchAnimals = async () => {
      throw mockError
    }

    const { result, waitForNextUpdate } = renderHook(() => useAnimalList())

    expect(result.current.loading).toBe(true)
    expect(result.current.error).toBeNull()
    expect(result.current.animals).toEqual([])

    await waitForNextUpdate()

    expect(result.current.loading).toBe(false)
    expect(result.current.error).toBe(mockError)
    expect(result.current.animals).toEqual([])
  })
})
