import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Signin} from '../models/signin';
import {HttpClient} from '@angular/common/http';
import {SignupService} from './signup.service';
import {User} from "../models/user-details";

const userUrl = "http://localhost:3000/users"

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isAdmin: boolean;
  isUser: boolean;
  userDestails: any = [];
  userInfo: User;

  private readonly mockedUser = new Signin('cna', '1234')
  isAuthenticated = false

  constructor(
    private router: Router,
    private http: HttpClient,
    private signuService: SignupService
  ) {
  }

  getUSerDetails() {
    this.signuService.fetchUserDetail().subscribe(data => {
      this.userDestails = data
    })
  }

  authenticate(signInData: Signin): boolean {
    if (this.checkCredentials(signInData)) {
      this.isAuthenticated = true
      this.router.navigateByUrl('home')
      return true
    }
    this.isAuthenticated = false
    return false
  }

  private checkCredentials(signInData: Signin): boolean {
    return this.checkEmail(signInData.getEmail()) && this.checkPassword(signInData.getPassword())
  }

  private checkEmail(email: string): boolean {
    return email === this.mockedUser.getEmail()
  }

  private checkPassword(password: string): boolean {
    return password === this.mockedUser.getPassword()
  }

  setAuthenticate(condition: boolean): void {
    this.isAuthenticated = condition;
  }

  setRole(user: User): void { 
    this.userInfo = user;
    if(user.role === 'admin') {
      this.isAdmin = true;
    } else {
      this.isUser = true;
    }
  }

  getUser(): User {
    console.log('auhthentication service component',this.userInfo)
    return this.userInfo;
  }





}