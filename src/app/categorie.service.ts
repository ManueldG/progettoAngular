import { Injectable } from '@angular/core';
import { Categorie } from './categorie';

@Injectable({
  providedIn: 'root'
})

export class CategorieService {

  constructor() { }

  protected categorieList: Categorie[] = [
    {
      id: 0,
      categoria: 'alunni',
      titolo: 'Alunni',
      descrizione: 'lorem ipsum dolor sit amet, consectetur adipiscing',
    },
    {
      id: 1,
      categoria: 'genitori',
      titolo: 'Genitori',
      descrizione: 'lorem ipsum dolor sit amet, consectetur adipiscing',
    },
    {
      id: 2,
      categoria: 'Insegnanti',
      titolo: 'Insegnanti',
      descrizione: 'lorem ipsum dolor sit amet, consectetur adipiscing',
    },
    {
      id: 3,
      categoria: 'Segretari',
      titolo: 'Segretari',
      descrizione: 'lorem ipsum dolor sit amet, consectetur adipiscing',
    },
  ]

  getAllIstituti(): Categorie[] {
    return this.categorieList;
  }

  getIstitutiById(id: number): Categorie | undefined {
    return this.categorieList.find(categorie => categorie.id === id);
  }

}








