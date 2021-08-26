import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { ActivatedRoute } from '@angular/router';

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
  private productsSubscription: Subscription;
  private categoriesSubscription: Subscription;
  public productsList: any = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private appService: AppService
  ) { }

  

  ngOnInit(): void {
    Promise.all([this.getProducts(), this.getCategories()]).then(() => {
      const id = this.activatedRoute.snapshot.queryParamMap.get('id') || '';
      if (id) {
        this.showProducts(id);
      }
    });
  }

  getProducts() {
    // subscribing to products list API
    let promise = new Promise((resolve, reject) => {
      this.productsSubscription = this.appService.getProductsList().subscribe((response: any) => {
        if (response?.length) {
          this.productsData = response;
          this.productItems = response;
          resolve('');
        }
      },
      () => {
        reject('');
      });
    })
    return promise;
  }

  getCategories() {
    // subscribing to products list API
    let promise = new Promise((resolve, reject) => {
      this.categoriesSubscription = this.appService.getCategoriesList().subscribe((response: any) => {
        if (response?.length) {
          this.categoriesList = response.filter((item: any) => item.enabled)
            .sort((a: any, b: any) => a.order - b.order);
          resolve('');
        }
      },
      () => {
        reject('');
      });
    })
    return promise;
  }

  // function to change products category from selectbox
  filterProducts(event: any): void {
    this.showProducts(event?.value);
  }

  // function to change products category from sidenav
  showProducts(productId: any | EventTarget): void {
    this.activeProductId = productId;
    const id = this.categoriesList.findIndex((obj: any) => obj.id === productId);
    if (this.categoriesList[id] && !this.categoriesList[id].isActive) {
      this.productItems = this.productsData.filter((product: any) => product.category === productId);
    } else {
      this.productItems = this.productsData;
    }
  }

  // function to add item to cart
  buynow(product: Object): void {
    this.appService.addItemToCart.next(product);
  }

  // function to unsubscribe to observable on component destroy
  ngOnDestroy(): void {
    this.productsSubscription?.unsubscribe();
    this.categoriesSubscription?.unsubscribe();
  }

}
