import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { router } from './shared/router';
import { ListarvuelosComponent } from './listarvuelos/listarvuelos.component';
import { VuelosService } from './services/vuelos.service';
import { HttpClientModule } from '@angular/common/http';
import { ReservaComponent } from './reserva/reserva.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarvuelosComponent,
    ReservaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(router),
  ],
  providers: [VuelosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
