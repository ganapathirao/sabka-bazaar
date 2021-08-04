import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // public variables
  public imagesList = [
    {path: 'assets/images/home/carousel-images/offer1.jpg', name : 'offer1'},
    {path: 'assets/images/home/carousel-images/offer2.jpg', name : 'offer2'},
    {path: 'assets/images/home/carousel-images/offer3.jpg', name : 'offer3'},
    {path: 'assets/images/home/carousel-images/offer4.jpg', name : 'offer4'},
    {path: 'assets/images/home/carousel-images/offer5.jpg', name : 'offer5'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
