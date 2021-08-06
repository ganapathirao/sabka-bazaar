import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AppService {

    constructor(
        private httpClient: HttpClient
    ) { }

    // Creating BeahaviourSubject to add items into cart
    addItemToCart = new BehaviorSubject<any>(null);

    // Creating BeahaviourSubject to show/hide loader
    isShowLoader = new BehaviorSubject<boolean>(false);

    // function to get banners list
    getBannersList(): Observable<any> {
        return this.httpClient.get('assets/server/banners/index.get.json');
    }

    // function to get categories list
    getCategoriesList(): Observable<any> {
        return this.httpClient.get('assets/server/categories/index.get.json');
    }

    // function to get products list
    getProductsList(): Observable<any> {
        return this.httpClient.get('assets/server/products/index.get.json');
    }

}