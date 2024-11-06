import { Car } from './models/Car.js'
import { House } from './models/Houses.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  houses = [
    new House({
      type: 'House',
      bed: 4,
      bath: 2,
      sqft: 6339,
      acres: 4.02,
      price: 467000,
      buyrent: 'Purchase',
      imgURL: 'https://images.unsplash.com/photo-1452626212852-811d58933cae?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8fDA%3D'
    })
  ]



  cars = [
    new Car({
      make: 'Jaguar',
      model: 'XE',
      year: 2017,
      color: 'silver',
      imgUrl: 'https://images.unsplash.com/photo-1630045698264-a0e3396c2cb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGphZ3VhciUyMHhlfGVufDB8fDB8fHww'
    }),
    new Car({
      make: 'Honda',
      model: 'Civic',
      year: 2020,
      color: 'red',
      imgUrl: 'https://images.unsplash.com/photo-1636915873177-a0c1a48d84eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvbmRhJTIwY2l2aWN8ZW58MHx8MHx8fDA%3D',
      mileage: 500
    }),
    new Car({
      make: 'Tonka',
      model: 'Truck',
      year: 1993,
      color: 'yellow',
      imgUrl: 'https://images.unsplash.com/photo-1677372191857-f596af525205?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dG9ua2ElMjB0cnVja3xlbnwwfHwwfHx8MA%3D%3D'
    }),
  ]

  /**@type {import('./models/Example.js').Example[]} */
  examples = []
}

export const AppState = createObservableProxy(new ObservableAppState())