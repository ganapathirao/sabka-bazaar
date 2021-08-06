import { HttpClientModule } from '@angular/common/http';
import { 
  ComponentFixture, 
  TestBed, 
  waitForAsync
} from '@angular/core/testing';

import { CarouselComponent } from '../carousel/carousel.component';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        HomeComponent,
        CarouselComponent
      ],
      imports :[
        HttpClientModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should get banners', waitForAsync(() => {
  //   component.ngOnInit();
  //   fixture.detectChanges();
  //   fixture.whenStable().then(() => {
  //     expect(component.imagesList).not.toEqual([]);
  //   })
  // }))

});
