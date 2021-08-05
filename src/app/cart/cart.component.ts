import { 
  Component, 
  OnInit, 
  Output,
  EventEmitter, 
  OnDestroy, 
  Input, 
  OnChanges 
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy, OnChanges {

  // public variables
  @Output() closeCart = new EventEmitter<any>();
  @Output() addItem = new EventEmitter<any>();
  @Output() removeItem = new EventEmitter<any>();
  @Input() cartData: any = [];
  @Input() totalItems = 0;
  public totalCartPrice = 0;

  constructor(
    private router: Router
  ) { }

  // Function to add overflow class to body
  ngOnInit(): void {
    document.getElementsByTagName('body')[0].classList.add('overflow-hidden');
  }

  // Function to update cart price for every add/remove event
  ngOnChanges(): void {
    this.totalCartPrice = 0;
    this.cartData.map((element: any) => {
      this.totalCartPrice = this.totalCartPrice + (element.count * element.price);
    })    
  }

  // Function to emit event to close the cart
  hideCart(): void {
    this.closeCart.emit('');
  }

  // Function to close cart and redirect to products page
  gotoProducts(): void {
    this.closeCart.emit();
    this.router.navigate(['/products']);
  }

  // Function to emit event to remove item from the cart
  removeCartItem(event: any): void {
    this.removeItem.emit(event);
  }

  // Function to emit event to add item into the cart
  addCartItem(event: any): void {
    this.addItem.emit(event);
  }
  
  // Function to remove overflow class from body
  ngOnDestroy(): void {
    document.getElementsByTagName('body')[0].classList.remove('overflow-hidden');
  }

}
