import { Injectable } from '@angular/core';
import {  Products } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
   private displayCart = new BehaviorSubject<boolean>(false);
  displayCart$ = this.displayCart.asObservable();

  cartItens:Products[]=[];

  setDisplayCart(value:boolean){
    this.displayCart.next(value)
  }
  getDisplayCart():boolean{
    return this.displayCart.value
  }
  
}
