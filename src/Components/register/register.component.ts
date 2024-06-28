import { Component } from '@angular/core';
import { Register } from '../../Models/Register';
import { JwtAuth } from '../../Models/JwtAuth';
import { AuthApiService } from '../../Services/auth-api.service';
import {
  FormsModule,
  FormGroup,
  Validators,
  FormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('(?=.*[0-9])(?=.*[A-Z])(?=.*[^A-Za-z0-9_]).*'),
      ],
    ],
    confirmPassword:  ['', [Validators.required]],
  });
 



 
jwtAuth = new JwtAuth();

/**
 *
 */
constructor(public authApi : AuthApiService,public router: Router,   private formBuilder: FormBuilder) {
  
}

register() {
  if (this.registerForm.valid ) {
    return;
  }
   this.authApi.Register(this.registerForm.value).subscribe({
  next:()=>{
    Swal.fire({
      position: "center",
      icon: "success",
      title: "You have successfully registered",
      showConfirmButton: false,
      timer: 1500
    }).then(()=>  this.router.navigate(['/login']));
  },error:(err)=>{
    Swal.fire({
      position: "top-right",
      icon: "warning",
      title: "something went wrong plz check your inputs",
      showConfirmButton: false,
      timer: 1500
    })
  }
});
}

// register(registerModel:Register){
 
// }
}
