import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { IShoppingCart } from 'src/app/models/products/products..interface';
import { SnackBarMessagesService } from 'src/app/services/shared/snack-bar-messages.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public wishListArray: IShoppingCart[];
  private shoppingCartNotification: NgbModalRef;
  @ViewChild('notificationModal') notificationModal: ElementRef;
  constructor(private appMessage: SnackBarMessagesService, private modalService: NgbModal) { }

  /**
     * we get all the products that have been purchased
     * By: Jose Luis Gallardo Vaca - 01/08/2022
     */
  private getShoppingCart(): void {
    let shoppingCart: string = '';
    shoppingCart = localStorage.getItem('shoppingCart');

    if (shoppingCart === '' || shoppingCart === null || shoppingCart === undefined) { //if shopping cart is empty
      //I send a message
      this.appMessage.invokeSnackbar(2, 'Sin productos añadidos');
      return;
    }
    //if shopping cart is not empty...
    this.wishListArray = JSON.parse(shoppingCart);
  }



  /**
     * open view shopping cart
     * By: Jose Luis Gallardo Vaca - 01/08/2022
     */
  public openNotificationModal(): void {
    this.getShoppingCart();
    console.log(`${this.wishListArray} || ${this.wishListArray} !== []}`);
    
    if (this.wishListArray || this.wishListArray !== []) { // if exist any product
      this.shoppingCartNotification = this.modalService.open(this.notificationModal, { size: 'lg', scrollable: true });
    }
  }



  /**
     * remove all the array products and close the modal
     * By: Jose Luis Gallardo Vaca - 01/08/2022
     */
  public removeAllProducts() {
    this.shoppingCartNotification.close();
    this.wishListArray = []
    localStorage.clear()
    this.appMessage.invokeSnackbar(1, 'Carrito limpio');
  }


  ngOnInit(): void {
  }

}
