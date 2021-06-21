import { Component, OnInit, Input } from '@angular/core';
import { Products } from 'src/app/models/products';
import { CartService } from 'src/app/services/cart.service';
import { CartItemService } from 'src/app/services/cart-item.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() productItem: Products 
   
  constructor(
    private msg: CartService,
    private  cartItemService: CartItemService
    ) { }

  ngOnInit(): void {
    
  }


  addToCart(){
    this.cartItemService.addProductToCart(this.productItem).subscribe(() =>{
       this.msg.sendItem(this.productItem)
    })
    
  }

}
