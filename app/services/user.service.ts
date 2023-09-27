import { ObserversModule } from '@angular/cdk/observers';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';import { Login } from '../models/login.model';
;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  login(loginForm: Login) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  userRegister(data:any): Observable<any>{
    return this.http.post('http://localhost:8084/user/register', data);
  }

  loginDetails(data:any):Observable<any>{
    return this.http.post('http://localhost:8084/user/login',data)
  }
}
