import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http:HttpClient) { }
  private cartItemCountSubject = new BehaviorSubject<number>(0);
  cartItemCount$ = this.cartItemCountSubject.asObservable();
  

  incrementItemCount() {
    this.cartItemCountSubject.next(this.cartItemCountSubject.value + 1);
  }

  decrementItemCount() {
    this.cartItemCountSubject.next(this.cartItemCountSubject.value - 1);
  }

  Cart(data:any): Observable<any>{
    return this.http.post('http://localhost:8084/carts/add', data);
  }
}