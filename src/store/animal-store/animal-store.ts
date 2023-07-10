import { ApolloClient, NormalizedCacheObject } from '@apollo/client'
import { observable, action, makeObservable } from 'mobx'

import { apolloClient } from '../../api/apolloClient'

import { GET_ANIMALS_LIST } from './queries'
import {
  AnimalList,
  AnimalStoreFetchAnimalsParams,
  Edge,
  GetAnimalsListQueryResponse,
  GetAnimalsListQueryVariables,
} from './types'

export class AnimalStore {
  animalList: AnimalList = {
    data: [],
    count: 0,
  }
  totalAnimalCount = 0
  loading = false
  error: Error | null = null
  apolloClient: ApolloClient<NormalizedCacheObject>

  constructor(apolloClient: ApolloClient<NormalizedCacheObject>) {
    makeObservable(this, {
      animalList: observable,
      loading: observable,
      error: observable,
      fetchAnimals: action,
    })
    this.apolloClient = apolloClient
  }

  async fetchAnimals({
    params,
    after,
    order,
  }: AnimalStoreFetchAnimalsParams): Promise<void> {
    const { nameStartsWith } = params
    this.loading = true
    try {
      const variables: GetAnimalsListQueryVariables = {
        order: [{ name: 'ASC' }],
      }

      if (after) {
        variables.after = after
      }

      if (nameStartsWith) {
        variables.where = {
          name: {
            startsWith: nameStartsWith,
          },
        }
      }

      if (order?.length) {
        variables.order = order
      }

      const response = await this.apolloClient.query<GetAnimalsListQueryResponse>({
        query: GET_ANIMALS_LIST,
        variables,
      })

      this.animalList = {
        data: response.data.animals.edges.map((edge: Edge) => ({
          id: edge.node?.id,
          name: edge.node?.name || '-',
          type: edge.node?.animalType?.name,
          breed: edge.node?.breed?.name,
          gender: edge.node?.sex?.name,
          color: edge.node?.color,
          img: edge.node?.photoUrl,
        })),
        count: response.data.animals.totalCount,
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.error = error
      } else {
        this.error = new Error('An unknown error occurred')
      }
    } finally {
      this.loading = false
    }
  }
}

const animalStore = new AnimalStore(apolloClient)
export default animalStore
