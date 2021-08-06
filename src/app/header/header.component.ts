import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  // public/private variables
  public showCart = false;
  public cartData: any = [];
  public totalCartItems = 0;
  private cartSubscription : Subscription;
  
  constructor(
    private appService: AppService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    // Subscribing to Observable to get cartdata
    this.cartSubscription = this.appService.addItemToCart.subscribe((response) => {
      if(response) {
        this.totalCartItems++;
        if(this.cartData?.length) {
          let isExists = this.cartData.some((element: any) => {
            if(element.id === response.id) {
              this.toastr.success(response.name+' Added To Cart','',{
                messageClass : 'f-16'
              });
              element['count'] = element['count']+1;
            }
            return element.id === response.id;
          })
          if(!isExists) {
            response['count']=1;
            this.cartData.push(response);
            this.toastr.success(response.name+' Added To Cart','',{
              messageClass : 'f-16'
            });
          }
          
        } else {
          this.toastr.success(response.name+' Added To Cart','',{
            messageClass : 'f-16'
          });
          response['count']=1;
          this.cartData.push(response);
        }
      }
    })
  }

  // Function to remove item from cart
  removeItem(event: Event): void {
    this.cartData.some((element: any,index: number) => {
      if(element.id === event) {
        if(element.count > 1) {
          element.count = element.count-1;
          this.totalCartItems--;
        } else {
          this.toastr.success(element.name+' Removed From Cart','',{
            messageClass : 'f-16'
          });
          this.cartData.splice(index,1);
          this.totalCartItems--;
        }
      }
    });
  }

  // Function to add item into cart
  addItem(event: Event): void {
    this.cartData.some((element: any) => {
      if(element.id === event) {
          element.count = element.count+1;
          this.totalCartItems++;
      }
    });
  }

  // Function to unsubscribe observable
  ngOnDestroy(): void {
    this.cartSubscription?.unsubscribe();
  }

}
