import { generateRandomInteger } from './utils'

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
