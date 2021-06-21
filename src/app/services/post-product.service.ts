
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Products} from "../models/products";
import {Observable, Subject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class PostProductService {
   productsUrl = 'http://localhost:3000/products';
   cartUrl = 'http://localhost:3000/cart';
   subject = new Subject;


  constructor(private httpClient: HttpClient) { }

  createProduct(data: Products): Observable<any>{
    return this.httpClient.post<any>(this.productsUrl,data).pipe(response => response);
  }

  sendItem(product): any{
    this.subject.next(product)
  }

  getItem(): Observable<any>{
    return this.subject.asObservable()
  }

  addProductToCart(product:Products):Observable<any>{
    return this.httpClient.post(this.cartUrl, {product})
  }

  boughtProducts(): Observable<Products[]>{
    return this.httpClient.get<Products[]>(this.cartUrl)
  }

  deleteCartItem(id:number): Observable<void>{
    return this.httpClient.delete<any>(this.cartUrl+'/'+id).pipe(map((response:any) => {
      this.boughtProducts()
    }))
  }

  getProducts():Observable<Products[]>{
    return this.httpClient.get<Products[]>(this.productsUrl);
  }
}