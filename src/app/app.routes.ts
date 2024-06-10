import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';

export const routes: Routes = [

  { path: 'card/:id', component: CardsComponent },
];

