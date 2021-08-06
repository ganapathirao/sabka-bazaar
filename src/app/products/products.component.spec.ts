import { HttpClientModule } from '@angular/common/http';
import { 
  ComponentFixture, 
  TestBed, 
  waitForAsync 
} from '@angular/core/testing';
import { AppService } from '../app.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from "@angular/router/testing";

import { HeaderComponent } from '../header/header.component';
import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let headerComponent: HeaderComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let headerFixture: ComponentFixture<HeaderComponent>;
  let appService: AppService;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ProductsComponent, 
        HeaderComponent 
      ],
      imports : [
        RouterTestingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ToastrModule.forRoot()
      ],
      providers :[
        AppService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    headerFixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    headerComponent = headerFixture.componentInstance;
    appService = TestBed.inject(AppService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get products', waitForAsync(() => {
      component.ngOnInit();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(component.productItems).not.toEqual([]);
      })
  }))

  it('should change products',waitForAsync(() => {
    component.ngOnInit();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      component.showProducts('5b6899683d1a866534f516e0');
      fixture.detectChanges();
      expect(component.activeProductId).toBe('5b6899683d1a866534f516e0');
    })
  }))

  it('should add item to cart', waitForAsync(() => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(headerComponent.totalCartItems).toBe(0);
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let buyBtn = fixture.nativeElement.querySelectorAll('.buy-btn')[0];
      buyBtn.click();
      fixture.detectChanges();
      headerFixture.detectChanges();
      expect(headerComponent.totalCartItems).toBe(1);
    })
  }))

});
