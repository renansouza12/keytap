import { Component } from '@angular/core';
import { Cart, Products } from 'src/app/models/product.model';
import { SharedService } from 'src/app/services/shared.service';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent  {
  products:Products[] = [
    {
      "id": 1,
      "name": "Break Fast",
      "price": 1000,
      "image": "https://i.pinimg.com/564x/66/d6/29/66d629c9d49d55cb916ba8f734fd3c2c.jpg"
    },
    {
      "id": 2,
      "name": "Japonese",
      "price": 985,
      "image": "https://i.pinimg.com/564x/3a/6d/81/3a6d81dc5ff750a6ab96ceb1ecabfe2f.jpg"
    },
    {
      "id": 3,
      "name": "Astronaut",
      "price": 900,
      "image": "https://i.etsystatic.com/42363382/r/il/ebd300/4852351717/il_794xN.4852351717_7win.jpg"
    },
    {
      "id": 4,
      "name": "Black Theme",
      "price": 800,
      "image": "https://i.pinimg.com/736x/ad/d4/73/add4730d97e5ecf10c563f702c4edb39.jpg"
    },
    {
      "id": 5,
      "name": "Eva",
      "price": 500,
      "image": "https://i.pinimg.com/564x/3a/d5/23/3ad523fe5f61cdeca06a61a92ac81e74.jpg"
    },
    {
      "id": 6,
      "name": "Forest",
      "price": 700,
      "image": "https://i.pinimg.com/736x/11/d4/64/11d4644cc878b8b7c29f43506cc8094c.jpg"
    }
  ]
  
  constructor(private sharedService:SharedService){}

  cartArray = this.sharedService.cartItens;

  btnCard(product:Cart):void{
  
    if(this.cartArray.indexOf(product) == -1){
      this.cartArray.push(product);
      console.log(this.cartArray.length);    
    }

  }

  
}
