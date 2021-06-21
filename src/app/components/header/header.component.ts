import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,public authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  
  redirectToSignIn():void{
    this.router.navigateByUrl('/signin')
  }
  
  redirectToAddProduct():void{
    this.router.navigateByUrl("/addproduct")
  }
}
