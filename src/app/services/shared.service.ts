import { Injectable } from '@angular/core';
import {  Products } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  cartItens:Products[]=[];

  cartAmount:number= 0;

  private displayCart = new BehaviorSubject<boolean>(false);
  displayCart$ = this.displayCart.asObservable();

  setDisplayCart(value:boolean):void{
    this.displayCart.next(value)
  }
  getDisplayCart():boolean{
    return this.displayCart.value
  }
  

}
