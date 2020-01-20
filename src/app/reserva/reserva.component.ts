import { Component, OnInit } from '@angular/core';
import { Vuelo } from '../model/vuelo';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
})
export class ReservaComponent implements OnInit {

  vuelo: Vuelo;
  constructor() {
  }

  ngOnInit() {
    console.log('Construc: ' + this.vuelo);
  }

}
