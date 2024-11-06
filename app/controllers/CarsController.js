import { AppState } from "../AppState.js";
import { carsService } from "../services/CarsService.js";


export class CarsController {
  constructor() {
    console.log('🚙🎮');
    carsService.loadCars()
    this.drawCars()
  }


  drawCars() {
    console.log('✏️🚙🚙');
    const carsListingsElm = document.getElementById('car-listings')
    carsListingsElm.innerHTML = ''
    AppState.cars.forEach(car => carsListingsElm.innerHTML += car.Card)
  }

  createCarListing() {
    event.preventDefault() // prevent the default form submission event
    /**
     * @type {HTMLFormElement}
     */

    // @ts-ignore
    const formElm = event.target
    console.log('Creating a Car', formElm);
    console.log(formElm.make.value);
    // NOTE collect all the data from the form!
    const formData = {
      make: formElm.make.value,
      model: formElm.model.value,
      year: formElm.year.value,
      color: formElm.color.value,
      imgUrl: formElm.imgUrl.value,
      mileage: formElm.mileage.value,
    }
    console.log(formData); // check to see if it's all there
    carsService.createCarListing(formData)
    this.drawCars()
  }

  deleteCarListing(carId) {
    console.log('🔥deleting!', carId);
    const confirmed = confirm("Are you sure you want to delete this? this action cannot be REVERED. It will be gone forevah!")
    if (!confirmed) return
    const areYourSureSure = confirm("Are you absolutely Sure?")
    if (!areYourSureSure) return
    const typingChallange = prompt('Please type "Hell Yeah" to confirm this action')
    if (typingChallange != 'Hell Yeah') return

    carsService.deleteCarListing(carId)
    this.drawCars()
  }
}