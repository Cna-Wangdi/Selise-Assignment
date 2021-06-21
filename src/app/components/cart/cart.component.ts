import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from 'src/app/models/products';
import { CartItemService } from 'src/app/services/cart-item.service';
import { CartService } from 'src/app/services/cart.service';

const cartUrl = 'http://localhost:3000/cart'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = [];
  cartTotal = 0;
  disableRemoveBtn = false;
  constructor( 
    private msg: CartService,
    private cartItemService: CartItemService,
    private http:HttpClient,
  ) { }

  ngOnInit(): void { 
    this.addProducts()
  }

  addProducts(){
    this.cartItemService.boughtProducts().subscribe(product => { 
      this.cartItems = product;
      this.calculateCartTotal()
    })
  }

  handleSubscription(){
    this.msg.getItem().subscribe((product:Products) => {
      this.calculateCartTotal()
  })
  }

   calculateCartTotal(): void{ 
    this.cartTotal = 0
    this.cartItems.forEach ( vo => {
        this.cartTotal += vo.product.price * vo.product.qty;
    });
  }

  removeProduct(index: number): void { 
    // console.log(index)
        this.cartItemService.deleteCartItem(index).subscribe(response => {
          this.cartItems.splice(index);
          this.addProducts()
        })
  }
  
  addOneMore(index: number): void{
   this.disableRemoveBtn = false;
   console.log(this.cartItems[index].product.qty)
   this.cartItems[index].product.qty+=1
   this.calculateCartTotal();
   
  }

  deleteOne(index: number): void { debugger;
    // console.log(this.cartItems[index].product.qty)

    if(this.cartItems[index].product.qty != 1){
     this.cartItems[index].product.qty-=1
     this.disableRemoveBtn = false;
    }else{
     this.disableRemoveBtn = true;
    } 
    this.calculateCartTotal()
   }

}
