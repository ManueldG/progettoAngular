import { Component,ElementRef,inject,Input  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CardComponent } from './card/card.component';
import { from,Observable,Observer } from 'rxjs';
import { CommonModule } from '@angular/common';

import { Categorie } from '../categorie';
import { CategorieService } from '../categorie.service';

import { Istituti } from '../istituti';
import { IstitutiService } from '../istituti.service';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CardComponent,CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})

export class CardsComponent {

  categoria?: Categorie;
  categorie: Categorie[] = [];

  categorieService: CategorieService = inject(CategorieService);

  institutoService: IstitutiService = inject(IstitutiService);
  instituto?: Istituti ;

  @Input() id: number = 0;

  titolo: string = 'materna';

  constructor(private route: ActivatedRoute){

    this.categorie = this.categorieService.getAllIstituti();
    this.categoria = this.categorieService.getIstitutiById(this.id);

}

titoloFn(id:number):Istituti|undefined{

  let elem  =  this.institutoService.getIstitutiById(id);

  return elem;

}


}
