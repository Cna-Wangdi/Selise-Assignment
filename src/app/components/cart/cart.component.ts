
import {Component, OnInit} from '@angular/core';
import {Products} from 'src/app/models/products';
import {PostProductService} from "../../services/post-product.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = [];
  cartTotal = 0;
  disableRemoveBtn = false;

  constructor( private productService: PostProductService) {}

  ngOnInit(): void {
    this.addProducts();
  }

  addProducts(): void {
    this.productService.boughtProducts().subscribe(product => {
      this.cartItems = product;
      this.calculateCartTotal();
    })
  }

  calculateCartTotal(): void {
    this.cartTotal = 0;
    this.cartItems.forEach(vo => {
      this.cartTotal += vo.product.price * vo.product.qty;
    });
  }

  deleteProduct(index: number): void {
    this.productService.deleteCartItem(index).subscribe(response => {
      this.cartItems.splice(index);
      this.addProducts()
    })
  }

  addProductQuantity(index: number): void { debugger;
    this.disableRemoveBtn = false;
    (this.cartItems[index].product.qty) = +(this.cartItems[index].product.qty) +  1;
    this.calculateCartTotal();
  }

  deleteProductQuantity(index: number): void {
    if (this.cartItems[index].product.qty != 1) {
      this.cartItems[index].product.qty = +(this.cartItems[index].product.qty) - 1;
      this.disableRemoveBtn = false;
    } else {
      this.disableRemoveBtn = true;
    }
    this.calculateCartTotal();
  }

  handleSubscription(): void {
    this.productService.getItem().subscribe((product: Products) => {
      this.calculateCartTotal();
    })
  }

}