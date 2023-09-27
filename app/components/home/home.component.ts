import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  numberOfBooks=0;

  public books:Book[]=[];
  order: string[] = [
   "low-high","high-low","newest"
  ];

  search:string="";
  cartItems: any;
  constructor(private bookService:BookService,
    private cartServices:CartService){}

 
  ngOnInit(): void {
    
     this.bookService.getBooks().subscribe((response:any) =>{
      console.log("book " + response);
      this.books=response.data;
      console.log("read"+this.books);
      this.numberOfBooks=this.books.length;

    })}


  // added:boolean=true;
  onClick(book:Book){
    if (!book.added){
    this.bookService.getBookById(book.bookId).subscribe(response => {
      console.log("Clicked")
      book.added=true;
      this.cartItems.incrementItemCount();
    });
    }else{
    book.added=false;
    this.cartItems.decrementItemCount();
    }
    
    }

  deleteBookId(id: number): void {
    this.bookService.deleteBookId(id).subscribe((response:any) => {
      console.log("deleted Succesfully");
      this.ngOnInit();
    })
  }

 
  
    Cart():void{
    this.cartServices.Cart(this.books).subscribe((response:any) =>{
     console.log("book " + response);
     this.books=response.data;
     
   

   })}
    
  
}
