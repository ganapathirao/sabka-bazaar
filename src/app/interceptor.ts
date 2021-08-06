import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { AppService } from './app.service';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  private totalRequests = 0;

  constructor(
      private appService: AppService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    this.totalRequests++;
    this.appService.isShowLoader.next(true);
    return next.handle(request).pipe(
      finalize(() => {
        this.totalRequests--;
        if (this.totalRequests === 0) {
            this.appService.isShowLoader.next(false);
        }
      })
    );
  }
}