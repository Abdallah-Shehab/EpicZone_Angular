import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { AuthService } from '../../Services/auth-service.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLinkActive,RouterLink,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit   {
 
userDetails:any;
  constructor(public router:Router,public authService:AuthService)  {
   
     
    // this.role=this.token;
    
  }
  ngOnInit(): void {
   
  }

 

  logout(){
    Swal.fire({
      title: "Are you sure?",
      
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log out!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Loged out!",
         
          icon: "success"
        });
      this.authService.Logout();
      this.router.navigate(['/login']);


     
      }
    });
 
   
    
  }

  isLoggedIn (){
   this.userDetails=this.authService.getUserDetails()
    return this.authService.isLoggedIn();

  }
  
}
