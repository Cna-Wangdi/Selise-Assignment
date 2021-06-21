import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const userUrl= "http://localhost:3000/users"

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor( private http: HttpClient) { }

  registerUser(data){
    return this.http.post(userUrl,data)
  }
  fetchUserDetail(): Observable<any>{
    return this.http.get<any>(userUrl)
  }
}
