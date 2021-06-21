
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from 'src/app/services/authentication.service';
import {User} from "../../models/user-details";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  adminInfo: User;
  constructor(private router: Router, public authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  redirectToSignIn(): void {
    this.router.navigateByUrl('/signin');
  }

  redirectToAddProduct(): void {
    this.router.navigateByUrl("/addproduct");
  }
}
