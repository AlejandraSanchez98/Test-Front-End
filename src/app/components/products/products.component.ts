import { Component, OnInit } from '@angular/core';
import { IProducts } from '../../models/products/products..interface';
import { ApiProductsService } from '../../services/products/api-products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public productsArray: IProducts[]

  constructor(private ApiProducts: ApiProductsService) {
    this.productsArray = [];
   }

   /**
    * We consume the web service to obtain the products and store the result in an array of objects
    * By: Jose Luis Gallardo Vaca - 01/08/2022
    */
  public getProducts(): void{
    this.ApiProducts.getProductsWs()  


  }

  ngOnInit(): void {
  }

}
