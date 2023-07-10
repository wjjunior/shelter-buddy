import animalStore, { AnimalStore } from './animal-store/animal-store'

class RootStore {
  animalStore: AnimalStore
  constructor() {
    this.animalStore = animalStore
  }
}
const rootStore = new RootStore()
export default rootStore
