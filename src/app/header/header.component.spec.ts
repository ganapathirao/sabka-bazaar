import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';
import { CartComponent } from '../cart/cart.component';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderComponent } from './header.component';
import { AppService } from '../app.service';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let cartFixture : ComponentFixture<CartComponent>;
  let cartComponent: CartComponent;
  let appService: AppService;

  let cartData = [{
    "name": "Apple - Washington, Regular, 4 pcs Apple - Washington, Regular, 4 pcs",
    "imageURL": "assets/images/products/fruit-n-veg/apple.jpg",
    "description": "The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.",
    "price": 100,
    "stock": 50,
    "category": "5b6899953d1a866534f516e2",
    "sku": "fnw-apple-4",
    "id": "5b6c6aeb01a7c38429530884",
    "count": 1
  }]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent, CartComponent ],
      imports :[
        RouterTestingModule,
        HttpClientModule,ToastrModule.forRoot()
      ],
      providers : [
        AppService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    cartFixture = TestBed.createComponent(CartComponent);
    cartComponent = cartFixture.componentInstance;
    appService = TestBed.inject(AppService);
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    component.totalCartItems = 0;
    appService.addItemToCart.next(cartData[0]);
    cartComponent.cartData = component.cartData;
    fixture.detectChanges();
    cartFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('cart items & price should not be empty',() => {
    cartComponent.totalItems = component.totalCartItems;
    cartComponent.ngOnChanges();
    cartFixture.detectChanges();
    expect(cartComponent.totalItems).toBe(1);
    expect(cartComponent.totalCartPrice).toBe(100);
  })

  it('cart should add item', () => {
    spyOn(component,'addItem').and.callThrough();
    cartComponent.addItem.subscribe((res) => {
      component.addItem(res);
    });
    cartComponent.addCartItem(cartData[0].id);
    expect(component.addItem).toHaveBeenCalled();
    cartComponent.totalItems = component.totalCartItems;
    expect(cartComponent.totalItems).toBe(2); 
  })

  it('cart price should double on item add', () => {
    spyOn(component,'addItem').and.callThrough();
    cartComponent.addItem.subscribe((res) => {
      component.addItem(res);
    });
    cartComponent.addCartItem(cartData[0].id);
    expect(component.addItem).toHaveBeenCalled();
    cartFixture.detectChanges();
    cartComponent.ngOnChanges();
    expect(cartComponent.totalCartPrice).toBe(200);
  });

  it('cart should remove item',() => {
    spyOn(component,'removeItem').and.callThrough();
    cartComponent.removeItem.subscribe((res) => {
      component.removeItem(res);
    });
    cartComponent.removeCartItem(cartData[0].id);
    expect(component.removeItem).toHaveBeenCalled();
    expect(cartComponent.totalItems).toBe(0); 
  })

  it('cart price should be zero', () => {
    spyOn(component,'removeItem').and.callThrough();
    cartComponent.removeItem.subscribe((res) => {
      component.removeItem(res);
    });
    cartComponent.removeCartItem(cartData[0].id);
    expect(component.removeItem).toHaveBeenCalled();
    cartFixture.detectChanges();
    cartComponent.ngOnChanges();
    expect(cartComponent.totalCartPrice).toBe(0);
    expect(cartComponent.cartData.length).toBe(0);
  });

  it('should open cart on button click',() => {
    let cartButton = fixture.debugElement.query(By.css('#cartBtn'));
    cartButton.triggerEventHandler('click',{});
    fixture.detectChanges();
    let overlayElement =  fixture.debugElement.query(By.css('.cart-overlay'));
    expect(overlayElement).toBeTruthy();
  });

  it('should close on outside click',() => {
    let cartButton = fixture.debugElement.query(By.css('#cartBtn'));
    cartButton.triggerEventHandler('click',{});
    fixture.detectChanges();
    let overlayElement = fixture.debugElement.query(By.css('.cart-overlay'));
    overlayElement.triggerEventHandler('click',{});
    fixture.detectChanges();
    let overlay = fixture.debugElement.query(By.css('.cart-overlay'));
    expect(overlay).toBeFalsy();
  })
  
}); 

 