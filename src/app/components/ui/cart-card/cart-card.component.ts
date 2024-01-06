import { Component,Input } from '@angular/core';


@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss']
})
export class CartCardComponent {
  @Input() itemImage!:string;
  @Input() itemName!:string;
  @Input() itemPrice!:number;

}
