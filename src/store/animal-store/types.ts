export interface Animal {
  [key: string]: string | number | undefined | null
  id: number | string
  name?: string
  type: string
  breed: string
  gender: string
  color: string
  img?: string | null
}

export interface AnimalList {
  data: Animal[]
  count: number
}

export interface GetAnimalsListQueryVariables {
  order:
    | {
        [x: string]: {
          name: string
        }
      }[]
    | {
        [x: string]: string
      }[]
  after?: string | null
  where?: {
    name: {
      startsWith: string
    }
  }
}

export interface Edge {
  node: {
    id: string
    name: string | null
    color: string
    photoUrl: string | null
    animalType: {
      name: string
      __typename: string
    }
    breed: {
      name: string
      __typename: string
    }
    sex: {
      name: string
      __typename: string
    }
    __typename: string
  }
  __typename: string
}
export interface GetAnimalsListQueryResponse {
  animals: {
    edges: Edge[]
    totalCount: number
  }
}

export interface AnimalListParams {
  page: number
  nameStartsWith?: string
  sortBy?: string
  sortOrder?: string
}

export interface AnimalStoreFetchAnimalsParams {
  params: AnimalListParams
  after?: string
  order?:
    | {
        [x: string]: {
          name: string
        }
      }[]
    | {
        [x: string]: string
      }[]
}
