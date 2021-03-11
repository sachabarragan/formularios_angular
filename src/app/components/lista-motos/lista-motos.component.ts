import { Component, OnInit } from '@angular/core';
import { Moto } from 'src/app/models/motos.models';
import { BikesService } from '../../bikes.service';

@Component({
  selector: 'app-lista-motos',
  templateUrl: './lista-motos.component.html',
  styleUrls: ['./lista-motos.component.css']
})
export class ListaMotosComponent implements OnInit {

  bikes: Moto[];

  constructor(
    private _bikeService: BikesService
  ) { 
    
  }

  ngOnInit(): void {
    this._bikeService.getAllBikes()
      .then( arrBikesAll => {
        this.bikes = arrBikesAll;
      })
  }

}
