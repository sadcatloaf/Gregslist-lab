



export class Car {
  constructor(data) {
    this.make = data.make
    this.model = data.model
    this.year = data.year
    this.color = data.color
    this.imgUrl = data.imgUrl
  }


  get Card() {
    return `
         <div class="col-md-4">
         <div class="card shadow-sm">
           <img class="card-img p-2"
             src="${this.imgUrl}"
             alt="">
           <div class="card-body">
             <p class="text-center fw-bold">
               ${this.make} ${this.model} ${this.year}
             </p>
             <p class="mb-0">
               ${this.color}
             </p>
           </div>
         </div>
       </div>
    `
  }
}