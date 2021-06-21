import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from "../models/user-details";


@Injectable({
  providedIn: 'root'
})
export class SignupService {

   userUrl= "http://localhost:3000/users"

  constructor( private http: HttpClient) { }

  registerUser(user: User): Observable<any>{
    return this.http.post(this.userUrl,user);
  }

  fetchUserDetail(): Observable<User[]>{
    return this.http.get<User[]>(this.userUrl);
  }
}
