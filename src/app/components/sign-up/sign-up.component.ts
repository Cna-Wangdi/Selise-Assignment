import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  isPasswordConfirmed = true;

  signUpForm: FormGroup;

  constructor(
    private builder: FormBuilder,
    private signupService: SignupService,
    private router: Router
    ) { }
    

  ngOnInit(): void {
    this.buildSignUpForm();
    this.valueChanges();
  }

  valueChanges(): void {
    this.signUpForm.valueChanges.subscribe(response => {
      debugger;
      if( ![response.password,response.confirm_password].includes('') && response.password === response.confirm_password) {
        this.isPasswordConfirmed = false;
      }
    })
  }


  buildSignUpForm(): void {
    this.signUpForm = this.builder.group({
      name:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      user_name:['', Validators.required],
      password:['', Validators.required],
      confirm_password:['', Validators.required],
      role: 'user',
    });
  }

   passwordsMatchValidator(): void{  debugger;
    if(this.password.value !== this.confirmPassword.value){
      this.confirmPassword.setErrors({ passwordsMatch : true})
    }else{
      this.confirmPassword .setErrors( null)
    }
    return null
  }

  register(): void {
      this.signupService.registerUser(this.signUpForm.value).subscribe( res => {
      this.signUpForm.reset();
      this.router.navigateByUrl('');
    });
}

  get password(): FormControl {
    return this.signUpForm.get('password') as FormControl;
  }

  get confirmPassword(): FormControl {
    return this.signUpForm.get('confirm_password') as FormControl;
  }

}