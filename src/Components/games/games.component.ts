import { FilterSectionComponent } from './filter-section/filter-section.component';
import { Component, OnInit } from '@angular/core';
import { GameCardComponent } from './game-card/game-card.component';
import { ProductsApiService } from '../../Services/products-api.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [GameCardComponent,CommonModule,FilterSectionComponent,RouterLinkActive,RouterLink,FormsModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent implements OnInit {
  Products:any ;
  tempList:any;

  selectedValue:string="";
  SortSelectedValue:string="";
  /**
   *
   */
  constructor(public ProductService :ProductsApiService) {
     
    
  }
  ngOnInit(): void {
    this.ProductService.getAllProducts().subscribe({
      next:(data)=>{this.Products = data
        
        console.log(data)
    console.log(this.Products)

      },
      error:(err)=>console.log(err)
    });

  }

   getCat(){
console.log(this.selectedValue);
this.ProductService.getAllProductsByCategory(this.selectedValue).subscribe({
  next:(data)=>{this.Products = data
    this.SortSelectedValue="";
    console.log(data)
console.log(this.Products)

  },
  error:(err)=>console.log(err)
});
  }

  doSort(){

    if(this.SortSelectedValue=="ASC"){

      this.Products.sort((a:any, b:any) => a.price - b.price);
    }else if(this.SortSelectedValue=="DES"){
      this.Products.sort((a:any, b:any) => b.price - a.price);

    }
     
  }
  
  


}
