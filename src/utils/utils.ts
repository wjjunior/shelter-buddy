export function getCursor(page: number, itemsPerPage: number) {
  return btoa(((page - 1) * itemsPerPage - 1).toString())
}

interface RandomIntegerOptions {
  min?: number
  max?: number
}

export function generateRandomInteger(options: RandomIntegerOptions = {}): number {
  const { min = 1, max = 1000 } = options

  if (min >= max) {
    throw new Error('Invalid range: min must be less than max')
  }

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
  return randomNumber
}

export const getSortOrderArray = (sortBy?: string, sortOrder?: string) => {
  if (!sortBy || !sortOrder) {
    return []
  }
  const getFieldName = (sortBy: string) => {
    if (sortBy === 'type') {
      return 'animalType'
    }

    if (sortBy === 'gender') {
      return 'sex'
    }
    return sortBy
  }
  if (['type', 'breed', 'gender'].includes(sortBy)) {
    return [
      {
        [getFieldName(sortBy)]: {
          name: sortOrder.toUpperCase(),
        },
      },
    ]
  }
  return [{ [sortBy]: sortOrder.toUpperCase() }]
}
