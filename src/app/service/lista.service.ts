import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

   lista  = [{
    nombre: 'David',
    apellido: 'Cordova',
    direccion: 'ramaditas'
  },{
    nombre: 'kiara',
    apellido: 'jofre',
    direccion: 'ramaditas'
  },{
    nombre: 'Gonzalo',
    apellido: 'Cordova',
    direccion: 'ramaditas'}
]

  constructor() { }

  getDataLista(){
    return this.lista;
  }
}
