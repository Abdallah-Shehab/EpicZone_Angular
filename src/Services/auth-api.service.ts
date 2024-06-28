import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../Models/Register';
import { JwtAuth } from '../Models/JwtAuth';
import { Login } from '../Models/Login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  ApiUrl:string ='http://localhost:8686/api/Account';
  constructor(private httpClient:HttpClient) { }

  public Register(user:Register):Observable<JwtAuth>{
    return this.httpClient.post<JwtAuth>(`${this.ApiUrl}/Register`,user);
  }

  public Login(user:Login):Observable<JwtAuth>{
    return this.httpClient.post<JwtAuth>(`${this.ApiUrl}/Login`,user);
  }
}
