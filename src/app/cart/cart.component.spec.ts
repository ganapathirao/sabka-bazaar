import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from '../header/header.component';
import { CartComponent } from './cart.component';
import { By } from '@angular/platform-browser';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let headerComponent: HeaderComponent;
  let headerFixture: ComponentFixture<HeaderComponent>;

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
      declarations: [ CartComponent, HeaderComponent ],
      imports: [RouterTestingModule,HttpClientModule,ToastrModule.forRoot()]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    headerFixture = TestBed.createComponent(HeaderComponent);
    headerComponent = headerFixture.componentInstance;
    headerComponent.cartData = cartData;
    headerFixture.detectChanges();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



});
