import { AppState } from "../AppState.js";


export class CarsController {
  constructor() {
    console.log('🚙🎮');
    this.drawCars()
  }


  drawCars() {
    console.log('✏️🚙🚙');
    const carsListingsElm = document.getElementById('car-listings')
    carsListingsElm.innerHTML = ''
    AppState.cars.forEach(car => carsListingsElm.innerHTML += car.Card)
  }
}