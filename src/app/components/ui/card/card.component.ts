import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  active!:string;

  @Input() name!:string;
  @Input() price!:number;
  @Input() image!:string;
  
  btnCard():void{
    this.active = 'active';   
  }
}
