import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { catchError, EMPTY, Observable, retry } from 'rxjs';
import { AuthService } from '../../services/auth-service/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private apiUrl: string = 'https://api.asgk-group.ru/';

  constructor(private auth: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {

    return next
      .handle(
        request.clone({
          url: this.apiUrl + request.url,
        }),
      ).pipe(
        retry(1),
        catchError((err) => {
          if(err.status === 500) {
            this.auth.error('Your request has not been sent. Сheck the correctness of the entered data')
          }
          else this.auth.error('There is already a scheduled event at this time. Please specify a different time!')
          return EMPTY;
        }),
      );
  }
}
