import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { Products } from '../models/products';


const cartUrl = "http://localhost:3000/cart"
@Injectable({
  providedIn: 'root'
})
export class CartItemService {

  constructor(private http:HttpClient) { }

  addProductToCart(product:Products):Observable<any>{
    return this.http.post(cartUrl, {product})
  }
  
  boughtProducts(): Observable<Products[]>{
    return this.http.get<Products[]>(cartUrl)
  }
  deleteCartItem(id:number): Observable<void>{
    return this.http.delete<any>(cartUrl+'/'+id).pipe(map((response:any) => {
      this.boughtProducts()
    }))
  }
}
