import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ContentComponent } from './components/content/content.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
    path: 'home',
    component: ContentComponent,
  },
  {
    path:'cart',
    component: CartComponent,
  },

  {
     path:'addproduct',
     component: AddProductComponent,
     canActivate: [AuthGuard]
  },
     {
    path:'signup',
    component: SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }