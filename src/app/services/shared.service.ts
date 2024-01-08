import { Injectable } from '@angular/core';
import {  Products } from '../models/product.model';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  cartItens:Products[]=[];

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
