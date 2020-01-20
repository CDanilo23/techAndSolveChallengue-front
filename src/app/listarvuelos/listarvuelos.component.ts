import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { Vuelo } from '../model/vuelo';
import { VuelosService } from '../services/vuelos.service';

@Component({
  selector: 'app-listarvuelos',
  templateUrl: './listarvuelos.component.html'
})
export class ListarvuelosComponent implements OnInit {

  vuelos: Vuelo[] = [];
  constructor(private service: VuelosService, private router: Router) { }

  ngOnInit() {

    console.log('Entro');
    return this.service.getVuelos().subscribe((data: Vuelo[]) => {
      console.log(data);
      this.vuelos = data;
    });

  }

  redirectToReservar( vuelo: Vuelo) {
    console.log(vuelo);
    this.router.navigate(['/reservar', '1']);
  }

}
