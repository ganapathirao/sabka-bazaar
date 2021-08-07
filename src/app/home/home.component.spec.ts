import { HttpClientModule } from '@angular/common/http';
import { 
  ComponentFixture, 
  TestBed, 
  waitForAsync
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CarouselComponent } from '../carousel/carousel.component';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let carouselComponent: CarouselComponent;
  let carouselFixture: ComponentFixture<CarouselComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        HomeComponent,
        CarouselComponent
      ],
      imports :[
        HttpClientModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    carouselFixture = TestBed.createComponent(CarouselComponent);
    carouselComponent = carouselFixture.componentInstance;

    component.ngOnInit();
    carouselFixture.detectChanges();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get banners', waitForAsync(() => {
    fixture.whenStable().then(() => {
      expect(component.categoriesList).not.toEqual([]);
    })
  }))

});
