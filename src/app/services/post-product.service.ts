import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


const productsUrl = 'http://localhost:3000/products'

@Injectable({
  providedIn: 'root'
})
export class PostProductService {

  constructor(private http: HttpClient) { }

  postProduct(data:any){
    return this.http.post<any>(productsUrl,data)
  }
}
