import { Component, OnInit } from '@angular/core';
import { SliderComponent } from './slider/slider.component';
import { ProductsApiService } from '../../Services/products-api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PsSliderComponent } from './ps-slider/ps-slider.component';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

import $ from 'jquery';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent,PsSliderComponent,FormsModule,RouterLink,CommonModule,CarouselModule, ButtonModule, TagModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit  {
  PCGames:any;
  PSGames:any;
  responsiveOptions: any[] | undefined;

  /**
   *
   */
  constructor(public ApiService:ProductsApiService) {
    
  }
  ngOnInit(): void {
    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];
    this.ApiService.getAllProductsByCategory("pc").subscribe({
      next:(data)=>{this.PCGames = data
        
        console.log(data)
    console.log(this.PCGames)
    
      },
      error:(err)=>console.log(err)
    });
    this.ApiService.getAllProductsByCategory("ps").subscribe({
      next:(data)=>{this.PSGames = data
        
        console.log(data)
    console.log(this.PSGames)
    
      },
      error:(err)=>console.log(err)
    });
   
  }
 
}
