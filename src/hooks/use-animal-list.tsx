import { useEffect, useState } from 'react'

import animalStore from '../store/animal-store'
import { Animal } from '../store/types'

import { AnimalListHook } from './types'

const useAnimalList = (): AnimalListHook => {
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)
  const [animals, setAnimals] = useState<Animal[]>([])

  const fetchAnimalsTest = async (): Promise<void> => {
    try {
      await animalStore.fetchAnimals()
      setAnimals(animalStore.animals)
    } catch (error) {
      setError(error as Error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAnimalsTest()
  }, [])

  return { loading, error, animals }
}

export default useAnimalList
