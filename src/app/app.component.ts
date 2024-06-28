import { NavbarComponent } from './../Components/navbar/navbar.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet, ActivatedRouteSnapshot } from '@angular/router';
import { HomeComponent } from '../Components/home/home.component';
import { FooterComponent } from '../Components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,HomeComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'UI';
  /**
   *
   */
  constructor(public router:Router , public acitveRoute:ActivatedRoute) {
 

   
  }
  ngOnInit(): void {
 
  }

}
