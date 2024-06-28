import { Component, OnInit, inject } from '@angular/core';
import { Login } from '../../Models/Login';
import { JwtAuth } from '../../Models/JwtAuth';
import { AuthApiService } from '../../Services/auth-api.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../Services/auth-service.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2'
import { error } from 'jquery';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
loginModel = new Login();
jwtAuth=new JwtAuth();
constructor(public AuthApi:AuthApiService,public authService:AuthService,public router:Router){
  
}
  ngOnInit(): void {
   
  }

login(loginModel:Login){
   this.AuthApi.Login(loginModel).subscribe({
    next:(jwtAuth)=>{     localStorage.setItem('jwtToken', jwtAuth.token);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "logged in successfully",
      showConfirmButton: false,
      timer: 1500
    }).then(()=>  this.router.navigate(['']));
  
  },
  error:(err)=>{
    
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "Please Check your Inputs",
      showConfirmButton: false,
      timer: 1500
    });
  }


}
  )
}
  



}

   


 


