import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
export const routes: Routes = [

  { path: 'list/:id', component: ListaComponent },
];

