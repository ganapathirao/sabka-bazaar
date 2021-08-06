import { 
  ComponentFixture, 
  TestBed 
} from '@angular/core/testing';

import { CarouselComponent } from './carousel.component';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;
  let images: any;
  let imagesList = [
    {path: 'assets/images/home/carousel-images/offer1.jpg', name : 'offer1'},
    {path: 'assets/images/home/carousel-images/offer2.jpg', name : 'offer2'},
    {path: 'assets/images/home/carousel-images/offer3.jpg', name : 'offer3'},
    {path: 'assets/images/home/carousel-images/offer4.jpg', name : 'offer4'},
    {path: 'assets/images/home/carousel-images/offer5.jpg', name : 'offer5'},
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    component.images = imagesList;
    fixture.detectChanges();
    images = fixture.nativeElement.querySelectorAll('.carousel-slide');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('first slide should have active class',() => {
    expect(images[0]).toHaveClass('active');
  })

  it('slide should change on next click',() => {
    component.next();
    expect(images[0]).not.toHaveClass('active');
    expect(images[1]).toHaveClass('active');
  })
  
  it('slide should change on prev click',() => {
    component.prev();
    expect(images[0]).not.toHaveClass('active');
    expect(images[4]).toHaveClass('active');
  })

  it('slide should change to specific index',() => {
    component.gotoSlide(3);
    expect(images[0]).not.toHaveClass('active');
    expect(images[3]).toHaveClass('active');
  })

  it('slide should change after 3s delay',() => {
    expect(images[0]).toHaveClass('active');
    jasmine.clock().install();
    component.slideChange();
    jasmine.clock().tick(3000);
    fixture.detectChanges();
    expect(images[0]).not.toHaveClass('active');
    expect(images[1]).toHaveClass('active');
    jasmine.clock().uninstall();
  })

});
