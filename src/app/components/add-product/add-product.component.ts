import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostProductService } from 'src/app/services/post-product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  formValue : FormGroup

  constructor( private formBuilder: FormBuilder, private postProduct: PostProductService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      id:[''],
      productname:[''],
      description:[''],
      imageurl:[''],
      price:[''],
      qty:['']
    })
  }

  addToProduct(){
    this.postProduct.postProduct(this.formValue.value).subscribe(res =>{
      console.log(res)
      
      this.formValue.reset()
    })
  }

}
