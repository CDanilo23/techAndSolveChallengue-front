import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class VuelosService {

  constructor(private httpclient: HttpClient) { }

  getVuelos() {
    
    return this.httpclient.get('http://localhost:8010/vuelos');
  }


}
