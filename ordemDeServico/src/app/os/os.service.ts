import { Injectable } from '@angular/core';
import { Os } from './os';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OsService {

  oss: Os[] = [];

  constructor() { }

  addOs(id: string, os: Os) {
    var jsonAux = JSON.stringify(os);
    id.toString;
    window.localStorage.setItem('os' + id, jsonAux);
  }

  getTamanhoLocalStorage(): Observable<Os[]> {
    console.log(localStorage.length);
    return of(this.oss);
  }// Acho que pode excluir este bloco.

  getOs(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  updateOs(os: Os) {
    var jsonAux = JSON.stringify(os);
    window.localStorage.setItem('os' + os.id, jsonAux);
  }

  removeOs(os: Os) {
    localStorage.removeItem('os' + os.id);
  }

  getOss() {
    return Object.keys(localStorage).filter(function (key) {
      return key.indexOf('os') == 0;
    }).map(function (key) {
      return JSON.parse(localStorage[key]);
    });
  }

}
