export function getCursor(page: number, itemsPerPage: number) {
  return btoa(((page - 1) * itemsPerPage - 1).toString())
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
