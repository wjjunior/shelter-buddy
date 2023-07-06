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
