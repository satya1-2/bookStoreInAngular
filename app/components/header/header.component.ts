import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  


   books:Book[]=[];

  constructor(private bookService:BookService,
    private cartServices:CartService){}
  // cartItems:number=5;
  
  search="";


  cartItemCount: number = 0;


  ngOnInit() {
    this.cartServices.cartItemCount$.subscribe((count: number) => {
      this.cartItemCount = count;
    });
  }



}

  

 