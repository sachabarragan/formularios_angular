import { Injectable } from '@angular/core';
import { Moto } from './models/motos.models';

@Injectable({
  providedIn: 'root'
})
export class BikesService {

  arrBikes: Moto[];

  constructor() {
    this.arrBikes = [];
   }

   getAllBikes(): Promise<Moto[]>{
    return new Promise((resolve, reject) => {
      resolve(this.arrBikes);
    })
   }

   putBike(pBike: Moto): void {
    this.arrBikes.push(pBike);
    console.log(this.arrBikes);
   }
}
