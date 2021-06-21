import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Signin } from 'src/app/models/signin';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  model: any ={}

  constructor(private authenticationService: AuthenticationService, private router:Router) { }

  
  areCredentialsInvalid = false

  ngOnInit(): void {
    this.authenticationService.getUSerDetails()
  }

  login(){
    
    const signInData = new Signin(this.model.username , this.model.password)
    if(!this.authenticationService.authenticate(signInData)){
      this.areCredentialsInvalid =true
    }
    
  }
  redirectToSignUp():void{
    this.router.navigateByUrl('/signup')
  }
  



}
