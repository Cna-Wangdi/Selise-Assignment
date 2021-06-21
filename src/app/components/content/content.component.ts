import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service'; 
import { Products } from 'src/app/models/products';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
  // @Input() cartItem: any
  productList: Products[]

  constructor( private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.productList = products
    })
  }

}
