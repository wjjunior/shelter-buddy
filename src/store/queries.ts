import { gql } from '@apollo/client'

export const GET_ANIMALS_LIST = gql`
  query GetAnimalsList(
    $where: AnimalFilterInput
    $order: [AnimalSortInput!]
    $after: String
  ) {
    animals(where: $where, order: $order, after: $after) {
      edges {
        node {
          id
          name
          color
          photoUrl
          animalType {
            name
          }
          breed {
            name
          }
          sex {
            name
          }
        }
      }
      totalCount
    }
  }
`
