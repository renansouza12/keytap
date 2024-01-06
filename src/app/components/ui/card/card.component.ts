import { Component,Input,Output, EventEmitter } from '@angular/core';

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

  @Output() cardButton = new EventEmitter<string>();
  
  btnCard():void{
    this.active = 'active'; 
    this.cardButton.emit();
    
  }
}
