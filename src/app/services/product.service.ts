import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../models/products';
// import { productsUrl } from '../config/api';


const apiUrl = 'http://localhost:3000/products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http:HttpClient) { }

  getProducts():Observable<Products[]>{
    return this.http.get<Products[]>(apiUrl)
  }
}
