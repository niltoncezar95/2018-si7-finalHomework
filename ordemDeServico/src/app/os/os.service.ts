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

  }

  getOs(key: string) {
    console.log(JSON.parse(localStorage.getItem(key)))
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return null;
    }
  }

  updateOs(os: Os) {
    let existOs = this.oss.find(os => os.id == os.id);
    existOs.cliente = os.cliente;
  }

  removeOs(os: Os){
    localStorage.removeItem('os' + os.id);
  }

  getOss() {
    return Object.keys(localStorage).filter(function(key) {
        return key.indexOf('os') == 0;
    }).map(function(key) {
        return JSON.parse(localStorage[key]);
    });
  }

}
