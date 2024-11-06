import { generateId } from "../utils/GenerateId.js"

const formatter = Intl.NumberFormat('en-us')

export class House {
    constructor(data) {
        this.id = generateId()
        this.type = data.type
        this.bed = data.bed
        this.bath = data.bath
        this.sqft = data.sqft
        this.acres = data.acres
        this.price = data.price
        this.buyrent = data.buyrent
        this.imgUrl = data.imgUrl

        this.listedAt = data.listedAt == undefined ? new Date() : new Date(data.listedAt)
    }




    get Card() {
        return `
         <div class="col-md-4 bg-dark">
         <div class="card shadow-sm">
           <img class="card-img p-2"
             src="${this.imgUrl}"
             alt="">
           <div class="card-body">
             <p class="text-center fw-bold">
               ${this.type}
             </p>
             <p class="mb-0">
               ${this.price}
             </p>
             <p class="mb-0">
               Beds: ${this.bed} Baths: ${this.bath} Sqft: ${this.FormattedSqft} Acres: ${this.acres}
             </p>
              <p class="mb-0">
               ${this.buyrent}
             </p>
             <p class="mb-0">
               ${this.FormattedTime}
             </p>
             <div>
              <button onclick="app.HousesController.deleteHouseListing('${this.id}')" class="btn btn-danger w-100" title="Delete ${this.type} ${this.price}"><i class="mdi mdi-delete-empty"></i></button>
             </div>
           </div>
         </div>
       </div>
    `
    }
    get FormattedTime() {
        return this.listedAt.toLocaleDateString('en-us', { weekday: 'short', year: 'numeric', month: 'numeric', day: 'numeric', minute: '2-digit', second: "2-digit" })
    }


    get FormattedSqft() {
        return formatter.format(this.sqft)
    }
}
