import { Component, OnInit, Input } from '@angular/core';
import { Products } from 'src/app/models/products';
import { CartService } from 'src/app/services/cart.service';
import {PostProductService} from "../../../services/post-product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() productItem: Products;
   text = "Add to Cart"
  disableButton: boolean = false


  constructor(
    private msg: CartService,
    private  productService: PostProductService
    ) { }

  ngOnInit(): void {
  }

  addToCart(): void {
    this.productService.addProductToCart(this.productItem).subscribe(() =>{
       this.productService.sendItem(this.productItem);
       this.disableButton = true
       this.text = "Added To Cart"

    });
  }

}