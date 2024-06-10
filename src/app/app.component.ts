import { Component } from '@angular/core';
import { RouterLink, RouterOutlet ,RouterLinkActive} from '@angular/router';

import { from, Observable } from 'rxjs';

import {NgbConfig,NgbModule,NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { CardsComponent } from './cards/cards.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLinkActive,RouterLink,NavbarComponent,CardsComponent,NgbModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  title = 'ex2';
  text = "";
  id: number = 0;
  data : Observable<Response> ;

  constructor(private modalService: NgbModal, ngbConfig: NgbConfig) {

    this.data = from(fetch('https://api.chucknorris.io/jokes/random'));
    this.fetchData(this);
  }

  handleFormSubmit(id:number) {

    console.log("id",id);
    this.id = id;


  }

  fetchData(elem:AppComponent) {

    this.data = from(fetch('https://api.chucknorris.io/jokes/random'));

    this.data.subscribe({ //parsing di Observable con next (response) accede ai valori response.json()  accede ai dati in lettura
      next(response) {

        response.json().then((ele)=>{

          console.log(ele.value) ;
          elem.text = ele.value;

        });
      },
      error(err) { console.error('Error: ' + err); },

      complete() { console.log('Completed'); }

    });

  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

}

