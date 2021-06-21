import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup.service'

function passwordsMatchValidator(form){
  const password = form.get('password')
  const confirmpassword = form.get('confirmpassword')

  if(password.value !== confirmpassword.value){
    confirmpassword.setErrors({ passwordsMatch : true})
  }else{
    confirmpassword.setErrors( null)
  }
  return null
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(
    private builder: FormBuilder,
    private signupService: SignupService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.buildSignUpForm();
  }

  buildSignUpForm(): void {
    this.signUpForm = this.builder.group({
      name:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      user_name:['', Validators.required],
      password:['', Validators.required],
      confirm_password:'',
      role: 'user',
      validators:passwordsMatchValidator
    })
  }

  register(): void {
    this.signupService.registerUser(this.signUpForm.value).subscribe( res => {
      this.signUpForm.reset();
      this.router.navigateByUrl('');
    });
  }

}