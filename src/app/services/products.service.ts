import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Products } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url = environment.api;

  constructor(private httpClient: HttpClient) {}

  getProducts(){
    return this.httpClient.get<Products[]>(this.url);
  }
}
