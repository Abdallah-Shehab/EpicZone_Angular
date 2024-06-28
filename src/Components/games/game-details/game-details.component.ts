import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsApiService } from '../../../Services/products-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-details.component.html',
  styleUrl: './game-details.component.css'
})
export class GameDetailsComponent implements OnInit ,OnDestroy  {

  GameID:any;
  ApiSubscribe:any;
  Game:any;
  /**
   *
   */
  constructor(public appService: ProductsApiService , public router:Router, public activeRoute :ActivatedRoute) {
      
  }
 
  ngOnInit(): void {
    
    this.GameID=this.activeRoute.snapshot.params['id'];
    console.log(this.GameID);
    this.ApiSubscribe=this.appService.getProductById(this.GameID).subscribe(data => {
      this.Game=data;
      console.log(data);
    })
  }

  ngOnDestroy(): void {
    this.ApiSubscribe.unsubscribe();
    }
}
