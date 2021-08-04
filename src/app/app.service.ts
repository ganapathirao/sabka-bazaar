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

    // function to get products list
    getProductsList(): Observable<any> {
        return this.httpClient.get('../assets/server/products.json');
    }

}