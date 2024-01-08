import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  displayCart!:boolean;
  
  constructor(private sharedService: SharedService){
  }
  cart(){
      this.sharedService.setDisplayCart(!this.sharedService.getDisplayCart());
  }
  get cartNumber(): number {
    return this.sharedService.getItems().length;
  }

}
