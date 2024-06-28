import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsApiService } from '../../Services/products-api.service';
import { Router, RouterLink } from '@angular/router';
import { GameModalComponent } from './game-modal/game-modal.component';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
 
 

@Component({
  selector: 'app-dash-board',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink,GameModalComponent,TableModule, TagModule, IconFieldModule, InputTextModule, InputIconModule, MultiSelectModule, DropdownModule,ButtonModule ],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css'
})
export class DashBoardComponent implements OnInit {
  
  Products:any;
  Game:any;
  GameID:number=0;
  AllProductSub:any;

  loading: boolean = false;
  @ViewChild('dt2') dt2!: Table;

  activityValues: number[] = [0, 100];

  searchValue: string | undefined;

  constructor(public ApiService:ProductsApiService,public router:Router) {
  
  }
  
  ngOnInit(): void {
    this.GetAll() ;

  }
  clear(table: Table) {
    table.clear();
    this.searchValue = ''
}

onInput(event: Event) {
  const inputElement = event.target as HTMLInputElement;
  if (this.dt2) {
    this.dt2.filterGlobal(inputElement.value, 'contains');
  }
}
  getGame(id:number){
    this.ApiService.getProductById(id).subscribe({
      next:(data)=> {this.Game = data; console.log(data)},
      error:(err)=> console.log(err)
    })
  }


  deleteGame(id:number){
    // location.reload()
   
    this.ApiService.deleteProduct(id).subscribe({
      next:()=> { console.log("Deleted"); this.GetAll();},
      error:(err)=> console.log(err)
    })
  }

  GetAll(){
    this.ApiService.getAllProducts().subscribe(
      {
        next:(data)=> this.Products = data,
        error:(err)=> console.log(err)
      }
    )
  }
 
  
}
 