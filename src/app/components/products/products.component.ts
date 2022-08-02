import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { IProducts } from '../../models/products/products..interface';
import { ApiProductsService } from '../../services/products/api-products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public productsArray: IProducts[]

  constructor(
    private ApiProducts: ApiProductsService,
    private config: NgbRatingConfig
    ) {
    this.productsArray = [];
    config.readonly = true;;
   }

   /**
    * We consume the web service to obtain the products and store the result in an array of objects
    * By: Jose Luis Gallardo Vaca - 01/08/2022
    */
  public getProducts(): void{
    this.ApiProducts.getProductsWs().subscribe(
      (success:IProducts[]) =>{
        this.productsArray = success;
        console.log(this.productsArray);
      },
      (error)=>{
        console.error(error);
        
      }
    );


  }

  ngOnInit(): void {
    this.getProducts();
  }

}
