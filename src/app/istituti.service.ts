import { Injectable } from '@angular/core';
import { Istituti } from './istituti';

@Injectable({
  providedIn: 'root'
})
export class IstitutiService {

  protected istitutiList: Istituti[] = [
    {
      id: 0,
      categoria: 'materna',
      titolo: 'Scuola Materna',
      descrizione: 'lorem ipsum dolor sit amet, consectetur adipiscing',
    },
    {
      id: 1,
      categoria: 'elementare',
      titolo: 'Scuola Elementare',
      descrizione: 'lorem ipsum dolor sit amet, consectetur adipiscing',
    },
    {
      id: 2,
      categoria: 'media',
      titolo: 'Scuola Media',
      descrizione: 'lorem ipsum dolor sit amet, consectetur adipiscing',
    },

  ];

  getAllIstituti(): Istituti[] {
    return this.istitutiList;
  }

  getIstitutiById(id: number): Istituti | undefined {
    return this.istitutiList.find(istituti => istituti.id === id);
  }

  constructor() { }
}
