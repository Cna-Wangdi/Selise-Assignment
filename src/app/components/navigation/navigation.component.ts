import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              ) {
  }

  ngOnInit(): void {
  }

  homePage() {
    this.router.navigateByUrl('/home');
  }

  redirectToCart(): void {
    this.router.navigateByUrl('/cart');
  }

  logout(): void {
    this.router.navigateByUrl('');
    this.authenticationService.setAuthenticate(false);
    this.authenticationService.isAdmin = false
    this.authenticationService.isUser = false
    
    

  }

}