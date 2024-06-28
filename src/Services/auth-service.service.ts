import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as jwt_decode from 'jwt-decode';
import { JwtPayload } from './jwt-payload';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Result:any;
  // token:any;
  //  constructor() {
  //   this.token= localStorage.getItem('jwtToken')

  //   }
 
  // public decodeToken():any{
  //   try{
  //     if(this.token!=null)
  // return jwt_decode.jwtDecode(this.token);

  //   }catch(error){
  //     console.log(error)
  //   }
  // }
  // isAuthenticated(): boolean {
  //  this.Result= this.decodeToken();
  //   if(this.token!=null){

  //     return true;
  //   }
  //   return false;
  // }
  UserRole : string='';


  getUserDetails=()=>{
const token =this.GetToken();
if(!token) return true;
const decode = jwt_decode.jwtDecode<JwtPayload>(token);
this.UserRole=decode.role;
const userDetails :any={
  id:decode.Id,
  role:decode.role,
  email:decode.email
}
return userDetails;
  }
 private GetToken():string|null {
  const Token:string|null = localStorage.getItem('jwtToken');
    return Token;
  }

  isLoggedIn():boolean {
    const token = this.GetToken();
    if(!token) return false;

    return !this.isTokenExpired();

  }
Logout():void{
  localStorage.removeItem('jwtToken');
}
  private isTokenExpired(){
    const token = this.GetToken();
    if(!token) return true;
    const decoded = jwt_decode.jwtDecode(token);
  
    const isTokenExpired = Date.now() >= decoded['exp']!*1000;
    return isTokenExpired ;
  }

}

