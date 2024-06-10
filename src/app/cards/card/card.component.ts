import { Component,Input,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable,from } from 'rxjs';

import { Categorie } from '../../categorie';
import { CategorieService } from '../../categorie.service';
import { Istituti } from '../../istituti';
import { Alunni } from '../../alunni';



@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent {

  @Input() cat!: Categorie; //punto esclamativo indica elemento non nullo
  @Input() id?:number; //punto interrogativo per usare elementi passati dall'elemento genitore
  @Input() titolo?:string;
  @Input() istituti?:Istituti;

  data!:Observable<Response>;
  alunni!:Alunni[];

  constructor(){

      this.data = from(fetch('http://localhost:8081/api/student/all'));

      this.fetchData(this);



  }

  fetchData(elem:CardComponent) {

    //this.data = from(fetch('http://localhost:8081/api/all'));

    this.data.subscribe({ //parsing di Observable con next (response) accede ai valori response.json()  accede ai dati in lettura
      next(response) {

        response.json().then((ele)=>{

          if(elem.cat.titolo=="Alunni" && elem.istituti?.categoria=="materna"){

            elem.alunni = ele;

          }

          console.log(elem.alunni,elem.istituti?.categoria) ;

        });
      },
      error(err) { console.error('Error: ' + err); },

      complete() { console.log('Completed'); }

    });

  }

}
