import { Injectable } from '@angular/core';
import { Os } from './os';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OsService {  
  
  oss : Os[] = [];

  constructor() { }

  addOs(id: string, os : Os) {
    var jsonAux = JSON.stringify(os);
    id.toString;
    window.localStorage.setItem(id, jsonAux);
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

  getOss() : Observable<Os[]> {
    var cont = localStorage.length;

    if (cont >= 0) {
      for (let i = 1; i <= cont; i++) {
        this.oss.push(JSON.parse(localStorage.getItem(String(i))));
      }
    }
    console.log(this.oss);
    return of(this.oss);
  }

}
