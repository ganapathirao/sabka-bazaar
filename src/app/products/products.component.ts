import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  // public/private variables
  public categoriesList: any = [];
  public productItems: any = [];
  public productsData: any = []
  public activeProductId: string = '';
  private productsSubscription : Subscription;

  constructor(
    private appService : AppService
  ) { }

  ngOnInit(): void {
  // subscribing to products list API
   this.productsSubscription = this.appService.getProductsList().subscribe((response: any) => {
      if(response?.length) {
        this.productsData = response;
        response.forEach((element: any) => {
          this.categoriesList.push({name: element.name, id: element.id});
        });
        this.activeProductId = response[0]['id'];
        this.productItems = response[0]['items'];
      }
    });
  }

  // function to change products category from selectbox
  filterProducts(event: any): void {
    this.showProducts(event?.value);
  }

  // function to change products category from sidenav
  showProducts(id: any | EventTarget): void {
    this.productsData.forEach((element: any) => {
        if(id === element.id) {
          this.activeProductId = element.id;
          this.productItems = element.items;
        }
    });
  }

  // function to add item to cart
  buynow(product: Object): void {
    this.appService.addItemToCart.next(product);
  }

  // function to unsubscribe to observable on component destroy
  ngOnDestroy(): void {
    this.productsSubscription.unsubscribe();
  }

}
