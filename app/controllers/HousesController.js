import { AppState } from "../AppState.js";

export class HousesController {
    constructor() {
        console.log('🏘️🎮');
        this.drawHouse()
    }



    drawHouse() {
        console.log('✏️🏘️🏘️');
        const housesListingsElm = document.getElementById('house-listings')
        housesListingsElm.innerHTML = ''
        AppState.houses.forEach(House => housesListingsElm.innerHTML += House.Card)
    }


    createHouseListing() {
        event.preventDefault()
        /**
         * @type {HTMLFormElement}
         */

        // @ts-ignore
        const formElm = event.target
        console.log('Creating a house', formElm);
        console.log(formElm.make.value);

        const formData = {
            type: formElm.type,
            bed: formElm.bed.value,
            bath: formElm.bath.value,
            sqft: formElm.sqft.value,
            acres: formElm.acres.value,
            price: formElm.price.value,
            buyrent: formElm.buyrent.value,
            imgUrl: formElm.imgUrl.value,

        }
        console.log(formData);

    }

    //   deleteHouseListing(houseId) {
    //     console.log('🔥deleting!', houseId);
    //     const confirmed = confirm("Are you sure you want to delete this? this action cannot be REVERED. It will be gone forevah!")
    //     if (!confirmed) return
    //    

    //      HousesService.deleteHouseListing(houseId)
    // this.drawHouse()
    //   }
}