import { Component, Input, OnInit } from '@angular/core';
import { ProductsApiService } from '../../../Services/products-api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink,CarouselModule, ButtonModule, TagModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit  {

@Input() product:any={};
ngOnInit(): void {

}

}
