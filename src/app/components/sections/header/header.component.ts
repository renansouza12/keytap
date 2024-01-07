import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  cartNumber!:number;
  displayCart!:boolean;
  
  constructor(private sharedService: SharedService){
    this.cartNumber = this.sharedService.cartAmount;
  }

  cart(){
      this.sharedService.setDisplayCart(!this.sharedService.getDisplayCart());
  }
}
