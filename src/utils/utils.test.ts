import { getSortOrderArray } from './utils'

describe('Utils', () => {
  describe('getSortOrderArray', () => {
    test('should return an array with a single object when sortBy is type, breed, or gender', () => {
      const sortBy = 'type'
      const sortOrder = 'asc'

      const result = getSortOrderArray(sortBy, sortOrder)

      expect(Array.isArray(result)).toBe(true)
      expect(result).toHaveLength(1)
      expect(result[0]).toHaveProperty('animalType')
      expect(result[0].animalType).toHaveProperty('name', 'ASC')
    })

    test('should return an array with a single object when sortBy is not type, breed, or gender', () => {
      const sortBy = 'name'
      const sortOrder = 'desc'

      const result = getSortOrderArray(sortBy, sortOrder)

      expect(Array.isArray(result)).toBe(true)
      expect(result).toHaveLength(1)
      expect(result[0]).toHaveProperty('name', 'DESC')
    })

    test('should return an empty array when sortOrder is not provided', () => {
      const sortBy = 'type'
      const sortOrder = ''

      const result = getSortOrderArray(sortBy, sortOrder)

      expect(Array.isArray(result)).toBe(true)
      expect(result).toHaveLength(0)
    })

    test('should return an empty array when sortBy is not provided', () => {
      const sortBy = ''
      const sortOrder = 'asc'

      const result = getSortOrderArray(sortBy, sortOrder)

      expect(Array.isArray(result)).toBe(true)
      expect(result).toHaveLength(0)
    })
  })
})
