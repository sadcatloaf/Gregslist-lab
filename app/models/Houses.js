import { generateId } from "../utils/GenerateId.js"

export class Car {
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
}