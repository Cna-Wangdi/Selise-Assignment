import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  subject = new Subject

  constructor() { }

  sendItem(product){
    // console.log(product)
    this.subject.next(product) 

  }

  getItem(){
    return this.subject.asObservable()
  }
}
