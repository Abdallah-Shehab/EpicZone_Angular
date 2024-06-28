import { IGame } from './../../../Services/igame';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import {  ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { ProductsApiService } from '../../../Services/products-api.service';



@Component({
  selector: 'app-dash-form',
  standalone: true,
  imports: [RouterLinkActive,ReactiveFormsModule,CommonModule ],
  templateUrl: './dash-form.component.html',
  styleUrl: './dash-form.component.css'
})
export class DashFormComponentent implements OnInit {
 
  product:any;
  Gameid:any;
  ProductSub:any;
  message:any=''
  /**
   *
   */
  constructor(public ApiService:ProductsApiService,public router:Router , public activeRoute:ActivatedRoute) {
  
  }


  ProductForm = new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(5)]),
    price:new FormControl(0,[Validators.required,Validators.min(200)]),
    category:new FormControl('',Validators.required),
    condtion:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required]),
    image:new FormControl(''),
    discount:new FormControl(0),

    
  })
 
  ngOnInit(): void {
    this.Gameid=this.activeRoute.snapshot.params['id'];

  if(this.Gameid!=0){
    this.ProductSub = this.ApiService.getProductById(this.Gameid).subscribe({
      next:(data)=>{
        this.product=data;
       
        this.getProductCategory.setValue(this.product.category);
        this.getProductName.setValue(this.product.name);
        this.getProductPrice.setValue(this.product.price);
        this.getProductCondtion.setValue(this.product.condtion);
        this.getProductimage.setValue(this.product.image);
        this.getProductdescription.setValue(this.product.description);
        this.getProductdiscount.setValue(this.product.discount);
     
      }
    })
  }
}

get getProductName(){
  return this.ProductForm.controls['name'];;
}

get getProductPrice(){
  return this.ProductForm.controls['price'];
}  get getProductCategory(){
  return this.ProductForm.controls['category'];
}  get getProductCondtion(){
  return this.ProductForm.controls['condtion'];
}
get getProductimage(){
  return this.ProductForm.controls['image'];
}
get getProductdescription(){
  return this.ProductForm.controls['description'];
}
get getProductdiscount(){
  return this.ProductForm.controls['discount'];
}
 
GametAction(){

if(this.ProductForm.status=="VALID"){
  if(this.Gameid==0){
    console.log(this.ProductForm.value);
    this.ProductSub= this.ApiService.addProduct(this.ProductForm.value).subscribe({
      next:(result)=>{console.log(result); this.router.navigate(['/Dashboard'])},
      error:(error)=>{this.message=error, console.log(error)}
    })
  }else{
    this.product=this.ProductForm.value;
    this.product.id=this.Gameid;
    this.ApiService.updateProduct(this.Gameid,  this.product).subscribe({
      next:()=>{console.log("Updated");this.router.navigate(['/Dashboard'])},
      error:(error)=>{ console.log(error) ; console.log(this.ProductForm.value)}
         })
  }
}else{
  
  this.getFormValidationErrors();
  // this.router.navigate(['/Dashboard'])
}
}

getFormValidationErrors() {
  Object.keys(this.ProductForm.controls).forEach(key => {
    const controlErrors: ValidationErrors | null|undefined= this.ProductForm.get(key)?.errors;
    if (controlErrors != null) {
      Object.keys(controlErrors).forEach(keyError => {
        console.log(`Control: ${key}, Error: ${keyError}, Value: ${controlErrors[keyError]}`);
      });
    }
  });
}

selectedFile: File | undefined;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
    this.uploadFile();
  }
  uploadFile() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      formData.append('upload_preset', 'syuynqku');

      fetch('https://api.cloudinary.com/v1_1/dgo9pxlaq/image/upload', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.secure_url) {
            this.ProductForm?.patchValue({ image: data.secure_url });
          }
        })
        .catch((error) => {
          console.error('Error uploading file to Cloudinary:', error);
        });
    }
  }

 
// this.router.navigate(['/games'])
}