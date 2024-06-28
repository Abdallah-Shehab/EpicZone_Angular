import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  ApiUrl:string ='http://localhost:8686/api/product';
  constructor(private httpClient : HttpClient) { }

  getAllProducts(){
    return this.httpClient.get(this.ApiUrl );
  }
  getAllProductsByCategory(category:string){
    return this.httpClient.get(`${this.ApiUrl}?category=${category}`);
  }
  getProductById(id:number){
    return this.httpClient.get(`${this.ApiUrl}/${id}` );
  }
addProduct(product:any){
  return this.httpClient.post(`${this.ApiUrl}` ,product);

}
  updateProduct(id:number,product:any){
    return this.httpClient.put(`${this.ApiUrl}/${id}` ,product);

  }
  deleteProduct(id:number){
    return this.httpClient.delete(`${this.ApiUrl}/${id}` );

  }
}
