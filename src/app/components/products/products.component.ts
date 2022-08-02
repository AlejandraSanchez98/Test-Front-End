import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { IProducts,IShoppingCart } from '../../models/products/products..interface';
import { ApiProductsService } from '../../services/products/api-products.service';
import { SnackBarMessagesService } from '../../services/shared/snack-bar-messages.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public productsArray: IProducts[];
  private wishListArray: IShoppingCart[];
  constructor(private ApiProducts: ApiProductsService, private config: NgbRatingConfig, private appMessage: SnackBarMessagesService) {
    this.productsArray = [];
    this.wishListArray = [];
   }

   /**
    * We consume the web service to obtain the products and store the result in an array of objects
    * By: Jose Luis Gallardo Vaca - 01/08/2022
    */
  public getProducts(): void{
    this.ApiProducts.getProductsWs().subscribe({
      next: (success:IProducts[]) => {
      this.productsArray = success
      console.log(this.productsArray);  
    },
      error: (error) => { 
        console.error(error)
      }
    });
  }



  /**
   * We select a product and simulate a purchase by adding it to the shopping cart, the persistence of the information is carried out by localstorage.
   * @param idProduct 
   * By: Jose Luis Gallardo Vaca - 01/08/2022
   */
  public addProductToShoppingCart(product:IProducts):void{
    let existingProductIndex: number = 0;

    existingProductIndex = this.wishListArray.findIndex(element=> element.productId == product.productId);
    console.log(existingProductIndex);
    
    if(existingProductIndex !== -1){ // found value
      this.wishListArray[existingProductIndex].quantity++; // we increase the products
      localStorage.setItem('shoppingCart', JSON.stringify(this.wishListArray));
      this.appMessage.invokeSnackbar(1,'Producto agregado al carrito con éxito');
      return;
    }

    //value not found
    this.wishListArray.push({productId: product.productId, productName: product.productName, quantity: 1}); // add the first product to shopping cart
    localStorage.setItem('shoppingCart', JSON.stringify(this.wishListArray));
    this.appMessage.invokeSnackbar(1,'Producto agregado al carrito con éxito');

  }


  ngOnInit(): void {
    this.getProducts();
  }

}
