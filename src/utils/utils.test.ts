import { generateRandomInteger, getSortOrderArray } from './utils'

describe('Utils', () => {
  describe('generateRandomInteger', () => {
    test('returns a random integer within the default range (1 to 1000)', () => {
      const randomInteger = generateRandomInteger()
      expect(randomInteger).toBeGreaterThanOrEqual(1)
      expect(randomInteger).toBeLessThanOrEqual(1000)
    })

    test('returns a random integer within the specified range', () => {
      const randomInteger = generateRandomInteger({ min: 10, max: 20 })
      expect(randomInteger).toBeGreaterThanOrEqual(10)
      expect(randomInteger).toBeLessThanOrEqual(20)
    })

    test('throws an error if the min value is greater than or equal to the max value', () => {
      expect(() => {
        generateRandomInteger({ min: 20, max: 10 })
      }).toThrow('Invalid range: min must be less than max')

      expect(() => {
        generateRandomInteger({ min: 10, max: 10 })
      }).toThrow('Invalid range: min must be less than max')
    })
  })

  describe('getSortOrderArray', () => {
    test('should return an array with a single object when sortBy is type, breed, or gender', () => {
      // Arrange
      const sortBy = 'type'
      const sortOrder = 'asc'

      // Act
      const result = getSortOrderArray(sortBy, sortOrder)

      // Assert
      expect(Array.isArray(result)).toBe(true)
      expect(result).toHaveLength(1)
      expect(result[0]).toHaveProperty('animalType')
      expect(result[0].animalType).toHaveProperty('name', 'ASC')
    })

    test('should return an array with a single object when sortBy is not type, breed, or gender', () => {
      // Arrange
      const sortBy = 'name'
      const sortOrder = 'desc'

      // Act
      const result = getSortOrderArray(sortBy, sortOrder)

      // Assert
      expect(Array.isArray(result)).toBe(true)
      expect(result).toHaveLength(1)
      expect(result[0]).toHaveProperty('name', 'DESC')
    })

    test('should return an empty array when sortOrder is not provided', () => {
      // Arrange
      const sortBy = 'type'
      const sortOrder = ''

      // Act
      const result = getSortOrderArray(sortBy, sortOrder)

      // Assert
      expect(Array.isArray(result)).toBe(true)
      expect(result).toHaveLength(0)
    })

    test('should return an empty array when sortBy is not provided', () => {
      // Arrange
      const sortBy = ''
      const sortOrder = 'asc'

      // Act
      const result = getSortOrderArray(sortBy, sortOrder)

      // Assert
      expect(Array.isArray(result)).toBe(true)
      expect(result).toHaveLength(0)
    })

    // Add more test cases based on your requirements
  })
})
