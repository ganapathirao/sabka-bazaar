import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // public variables
  public imagesList = [];
  public categoriesList:any = [];

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    // getting banners list
    this.appService.getBannersList().subscribe((response) => {
      if(response?.length) {
        this.imagesList = response;
      }
    },
    (error) => {
      console.log(error);
    })

    // getting categories list
    this.appService.getCategoriesList().subscribe((categories) => {
      if(categories?.length) {
        this.categoriesList = categories.filter((item: any) => item.enabled)
        .sort((first: any,second: any) => first.order - second.order);
      }
    },
    (error) => {
      console.log(error);
    })

  }

}
