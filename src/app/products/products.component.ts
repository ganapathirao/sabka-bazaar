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
    })
    // this.getProducts();
    // this.getCategories();
  }

  getProducts() {
    // subscribing to products list API
    let promise = new Promise((resolve, reject) => {
      this.productsSubscription = this.appService.getProductsList().subscribe((response: any) => {
        if (response?.length) {
          this.productsData = response;
          // response.forEach((element: any) => {
          //   this.categoriesList.push({name: element.name, id: element.id});
          // });
          // this.activeProductId = response[0]['id'];
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

          // this.categories = this.categories.map((category) => {
          //   category.isActive = false;
          //   return category;
          // })
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
    // this.productsData.forEach((element: any) => {
    //     if(id === element.id) {
    //       this.activeProductId = element.id;
    //       this.productItems = element.items;
    //     }
    // });
    this.activeProductId = productId;
    const id = this.categoriesList.findIndex((obj: any) => obj.id === productId);
    if (this.categoriesList[id] && !this.categoriesList[id].isActive) {
      this.productItems = this.productsData.filter((product: any) => product.category === productId);
    } else {
      this.productItems = this.productsData;
    }

    // this.categories.forEach((category, index) => {
    //   if (index === id) {
    //     category.isActive = !category.isActive;
    //   } else {
    //     category.isActive = false;
    //   }
    // })
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
