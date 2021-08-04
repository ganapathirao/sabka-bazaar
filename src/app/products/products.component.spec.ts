import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, inject, TestBed, waitForAsync } from '@angular/core/testing';
import { AppService } from '../app.service';
import { HeaderComponent } from '../header/header.component';
import { ToastrModule } from 'ngx-toastr';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let headerComponent: HeaderComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let headerFixture: ComponentFixture<HeaderComponent>;
  let appService: AppService;
  let mockSomeService = {
    getData: () => {}
  }

  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsComponent,HeaderComponent ],
      imports : [HttpClientModule,ToastrModule.forRoot()],
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
    fixture.detectChanges();
    appService = TestBed.inject(AppService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should add item to cart', waitForAsync(inject([AppService],(appService: AppService) => {
  //   // headerComponent.totalCartItems = 0;
  //   spyOn(mockSomeService, 'getData').and.returnValue();
  //   // spyOn(appService,'getProductsList');
  //   // component.ngOnInit();
  //   // fixture.detectChanges();
  //   expect(mockSomeService.getData).toHaveBeenCalled();
  // })))

});
