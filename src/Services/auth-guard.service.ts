import { Injectable, inject } from '@angular/core';
import { AuthService } from './auth-service.service';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  {

  constructor(private authService:AuthService,private router:Router) { }

 

  // CanActive: CanActivateFn = (
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ) => {
  //   if (this.authService.isAuthenticated()) {
  //         console.log("True");
          
  //         return true; // User is authenticated, allow navigation
  //       } else {
  //         // Redirect to login page (or any other route)
  //         return this.router.navigate(['/login']);
  //       }
  // };
 

}

export const canActivateGuard :CanActivateFn=(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
)=>{
    
  if (inject(AuthService).UserRole =='Admin') {
  console.log(inject(AuthService).UserRole);
  
    return true; // User is authenticated, allow navigation
  } else {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "Not Allowed To Enter",
      showConfirmButton: false,
      timer: 1500
    }) ;
    inject(Router).navigate(['']);
    // Redirect to login page (or any other route)
    // inject(Router).navigate(['/login']);
     return false;
  }

};
