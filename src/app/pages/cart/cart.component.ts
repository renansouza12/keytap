import { Component } from '@angular/core';
import { Products } from 'src/app/models/product.model';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent  {
  displayCart = this.sharedService.displayCart$;
  cartItens:Products[]=[];

  constructor(private sharedService: SharedService){
    this.cartItens = this.sharedService.cartItens; 
  }
  back():void{
    this.sharedService.setDisplayCart(false);
  }
  
}
