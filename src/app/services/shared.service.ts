import { Injectable } from '@angular/core';
import {  Cart, Products } from '../models/product.model';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  cartItens:Products[]=[];

  addItem(item:Cart):void{
    this.cartItens.push(item)
  }



  private displayCart = new BehaviorSubject<boolean>(false);
  displayCart$ = this.displayCart.asObservable();

  setDisplayCart(value:boolean):void{
    this.displayCart.next(value)
  }
  getDisplayCart():boolean{
    return this.displayCart.value
  }
  
  
  private isActive = new Subject<string>();

  isActive$ = this.isActive.asObservable();

  updateIsActive(newValue:string){
    this.isActive.next(newValue);
  }

}
