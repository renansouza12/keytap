import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
  products$ = new Observable<Products[]>();

  constructor(private productService: ProductsService){
    this.products$ = this.productService.getProducts();

      
  }


}
