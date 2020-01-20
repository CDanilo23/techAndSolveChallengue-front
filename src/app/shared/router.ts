import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../app.component';
import { ListarvuelosComponent } from '../listarvuelos/listarvuelos.component';
import { ReservaComponent } from '../reserva/reserva.component';




export const router: Routes = [
    {
        path: 'vuelos',
        component: ListarvuelosComponent
    },
    {
        path: 'reservar/:id',
        component: ReservaComponent
    },
    {
        path: '', redirectTo: 'about', pathMatch: 'full'
    }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
