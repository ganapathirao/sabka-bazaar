import { 
  AfterViewInit, 
  Component, 
  Input, 
  OnDestroy, 
  OnInit 
} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit, OnDestroy {
  // public variables
  @Input() images: any;
  public activeSlide = 0;
  public slidesList : any;
  public autoSlideChange: any;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.slidesList = document.getElementsByClassName('carousel-slide');
    if(this.slidesList && this.slidesList.length){
      this.slideChange();
    }
  }

  // Function to change slide after 5s
  slideChange(): void {
    if(this.autoSlideChange) {
      clearInterval(this.autoSlideChange);
    }
    this.autoSlideChange = setInterval(() => {
      this.next();
    },3000)
  }

  // Function to show previous silde
  prev(): void {
    this.slidesList[this.activeSlide].classList.remove('active');
    if(this.activeSlide !== 0) {
        this.activeSlide--;
    } else {
      this.activeSlide = this.images.length-1;
    }
    this.slideChange();
    this.slidesList[this.activeSlide].classList.add('active');
  }

  // Function to show next silde
  next(): void {
    this.slidesList[this.activeSlide].classList.remove('active');
    if(this.activeSlide !== this.images.length-1) {
        this.activeSlide++;
    } else {
      this.activeSlide = 0;
    }
    this.slideChange();
    this.slidesList[this.activeSlide].classList.add('active');
  }

  // Function to show open specific silde
  gotoSlide(index: number): void {
    this.slidesList[this.activeSlide].classList.remove('active');
    this.activeSlide = index;
    this.slidesList[this.activeSlide].classList.add('active');
    this.slideChange();
  }

  ngOnDestroy() {
    if(this.autoSlideChange) {
      clearInterval(this.autoSlideChange);
    }
  }

}
