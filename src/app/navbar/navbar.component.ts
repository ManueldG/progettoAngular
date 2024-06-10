import { Observable ,from} from 'rxjs';
import { Component,inject,Input,Output,EventEmitter,OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet ,RouterLinkActive} from '@angular/router';
import { IstitutiService } from '../istituti.service';
import { Istituti} from '../istituti';
import { Event } from '@angular/router';
import { log } from 'console';


@Component({

  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  outputs: ["myEvent: customEvent"],

})

export class NavbarComponent implements OnDestroy{

  categorie : Istituti[] = [];
  categorieService: IstitutiService = inject(IstitutiService);

  constructor() {

    this.categorie = this.categorieService.getAllIstituti();

  }

  @Output() formSubmit = new EventEmitter<number>();

  event(value:number){

    this.formSubmit.emit(value);

  }

  ngOnDestroy() {
    // Unsubscribe from all subscriptions to prevent memory leaks
    this.formSubmit.complete();
  }

}
