import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartCardComponent } from 'src/app/components/ui/cart-card/cart-card.component';

@NgModule({
  declarations: [
    CartCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CartCardComponent 
  ]
})
export class CartModule { }
