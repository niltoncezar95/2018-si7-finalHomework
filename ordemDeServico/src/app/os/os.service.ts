import { Injectable } from '@angular/core';
import { Os } from './os';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OsService {  
  
  oss : Os[] = [];

  constructor() { }

  addOs(os : Os) {
    this.oss.push(os);
  }

  getOss() : Observable<Os[]> {
    return of(this.oss);
  }

  updateOs(os : Os) {
    let existOs = this.oss.find(os => os.id == os.id);
    existOs.cliente = os.cliente;
  }

}
