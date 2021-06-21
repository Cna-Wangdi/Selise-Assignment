import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  
  signUp: FormGroup
  constructor(
    private builder: FormBuilder,
    private signupService: SignupService    
    ) { }

  ngOnInit(): void {
    this.buildForm() 
  }

  buildForm(){
    this.signUp = this.builder.group({
      name:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      username:['', Validators.required],
      password:['', Validators.required],
      confirmpassword:'',
      validators:passwordsMatchValidator
    })
  }

  register(){
    console.log(this.signUp.value)
    this.signupService.registerUser(this.signUp.value).subscribe((data)=> {
      console.log(data)
    })
  }

}