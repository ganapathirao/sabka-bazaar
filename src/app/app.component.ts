import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { startWith, tap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sabka-bazaar';
  isShowLoader = false;

  constructor(
    private appService: AppService
  ) {

  }

  ngOnInit() {
      this.appService.isShowLoader.pipe(
        delay(0)
    ).subscribe((response) => {
        if (response) {
          this.isShowLoader = true;
        } else {
          this.isShowLoader = false;
        }
      })
  }

}
