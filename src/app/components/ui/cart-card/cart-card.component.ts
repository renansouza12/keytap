import { Component,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss']
})
export class CartCardComponent {
   amountItem:number = 0;

  @Input() itemImage!:string;
  @Input() itemName!:string;
  @Input() itemPrice!:number;

  @Output() removeItem = new EventEmitter<string>();
  @Output() addCartItem = new EventEmitter<number>();
  @Output() removeCartItem = new EventEmitter<number>();

  excludeItem():void{
    this.removeItem.emit();
  }

  btnAdd():void{
    this.amountItem ++;
    this.addCartItem.emit()
  }
  btnRemove():void{
    this.amountItem > 0 ? (this.amountItem --, this.removeCartItem.emit()) : this.amountItem = 0;  

  }
}
