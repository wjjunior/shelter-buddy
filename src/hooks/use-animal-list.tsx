import { useEffect, useState } from 'react'

import animalStore from '../store/animal-store'
import { AnimalList, AnimalListParams } from '../store/types'
import { SORTABLE_LIST_ITEMS_PER_PAGE } from '../utils/constants'
import { getCursor, getSortOrderArray } from '../utils/utils'

import { AnimalListHook } from './types'

const useAnimalList = (params: AnimalListParams): AnimalListHook => {
  const { page, nameStartsWith, sortBy, sortOrder } = params
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)
  const [animalList, setAnimalList] = useState<AnimalList>({ data: [], count: 0 })

  const fetchAnimals = async (params: AnimalListParams): Promise<void> => {
    try {
      const after = getCursor(page, SORTABLE_LIST_ITEMS_PER_PAGE)
      const order = getSortOrderArray(sortBy, sortOrder)
      await animalStore.fetchAnimals({ params, after, order })
      setAnimalList(animalStore.animalList)
    } catch (error) {
      setError(error as Error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    setLoading(true)
    fetchAnimals({ page, nameStartsWith, sortBy, sortOrder })
  }, [page, nameStartsWith, sortBy, sortOrder])

  return { loading, error, animalList }
}

export default useAnimalList
