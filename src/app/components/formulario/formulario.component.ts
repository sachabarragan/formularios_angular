import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BikesService } from '../../bikes.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formNewBike: FormGroup;

  constructor(
    private _bikeService: BikesService
  ) { 
    this.formNewBike = new FormGroup({
      marca: new FormControl('', [
        Validators.required
      ]),
      modelo: new FormControl('', [
        Validators.required
      ]),
      color: new FormControl('', [
        Validators.required
      ]),
      anio: new FormControl(0, [
        Validators.required
      ]),
      cilindrada: new FormControl(1.0, [
        Validators.required
      ]),
      imagen: new FormControl('', [
        Validators.required
      ]),
    })
  }

  ngOnInit(): void {
  }

  onSubmitForm(){
    //console.log(this.formNewBike.value);
    this._bikeService.putBike(this.formNewBike.value);
  }

}
