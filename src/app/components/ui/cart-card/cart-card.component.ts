import { Component,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss']
})
export class CartCardComponent {
  @Input() itemImage!:string;
  @Input() itemName!:string;
  @Input() itemPrice!:number;

  @Output() removeItem = new EventEmitter<string>();

  excludeItem():void{
    this.removeItem.emit();
  }

}
