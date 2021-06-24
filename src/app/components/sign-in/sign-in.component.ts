import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from 'src/app/services/authentication.service';
import {Router} from '@angular/router';
import {SignupService} from "../../services/signup.service";
import {FormBuilder, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  model: any = {}
  signInForm: FormGroup;

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private signUpService: SignupService,
              private formBuilder: FormBuilder) {
  }

  areCredentialsInvalid: boolean = false;

  ngOnInit(): void {
    this.authenticationService.getUSerDetails();
    this.buildSignInForm();
  }

  buildSignInForm(): void {
    this.signInForm = this.formBuilder.group({
      user_name: [''],
      password: ['']
    })
  }

  signIn(): void {
    this.signUpService.fetchUserDetail().subscribe( users => {
      users.forEach(user => {
        if (user.user_name === this.signInForm.value.user_name && user.password === this.signInForm.value.password) {
          this.router.navigateByUrl('/home');
          this.authenticationService.setAuthenticate(true);
          this.authenticationService.setRole(user);
        } else {
          this.areCredentialsInvalid = true;
        }
      });
    }, () => {
      this.areCredentialsInvalid = true;
    });
  }

  redirectToSignUp(): void {
    this.router.navigateByUrl('/signup');
  }


}