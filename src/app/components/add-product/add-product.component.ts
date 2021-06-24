import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PostProductService} from 'src/app/services/post-product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm: FormGroup

  constructor(private formBuilder: FormBuilder,
              private productService: PostProductService) {
  }

  ngOnInit(): void {
    this.buildProductForm();
  }

  buildProductForm(): void {
    this.productForm = this.formBuilder.group({
      id: [undefined],
      productname: [undefined],
      description: [undefined],
      imageurl: [undefined],
      price: [undefined],
      qty: [undefined]
    })
  }

  addToProduct(): void { debugger
    this.productService.createProduct(this.productForm.value).subscribe(res => {
      this.productForm.reset()
    });
  }

}