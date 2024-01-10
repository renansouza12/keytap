import { Component } from '@angular/core';
import { Cart, Products } from 'src/app/models/product.model';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  displayCart = this.sharedService.displayCart$;
  cartItens: Products[] = [];

  amountItems:number = 0;

  constructor(private sharedService: SharedService) {
    this.cartItens = this.sharedService.cartItens;
  }

  back(): void {
    this.sharedService.setDisplayCart(false);
  }

  addCartItem(item:Cart):void{
    this.amountItems += item.price;
  }

  removeCartItem(item:Cart):void{
    this.amountItems > 0 ? this.amountItems -= item.price : this.amountItems
  }

  removeItem(item: Cart) {
    const itemSelected = this.cartItens.indexOf(item);

    if (itemSelected !== -1) {
      this.cartItens.splice(itemSelected, 1);
      this.sharedService.updateIsActive('');  
      this.amountItems = 0;
    }
  }

  get totalPrice():number{
    return this.sharedService.cartItens.reduce((total, item)=> total + item.price,0) + this.amountItems;
  }

  
}
