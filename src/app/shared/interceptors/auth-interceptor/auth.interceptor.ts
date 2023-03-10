import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpStatusCode,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  private apiUrl: string = 'https://api.asgk-group.ru/';
  private token = localStorage.getItem('Token');

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {

    return next
      .handle(
        request.clone({
          url: this.apiUrl + request.url,
          headers: new HttpHeaders({
            accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: this.token || '',
          }),
        }),
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === HttpStatusCode.Unauthorized) {
          }

          return throwError(() => new Error('test'));
        }),
      );
  }
}
