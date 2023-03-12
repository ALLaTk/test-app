import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../../models/login';
import { Token } from '../../models/token';

@Injectable()
export class AuthApiService {

  constructor(private httpClient: HttpClient) {}

  getToken(payload: Login): Observable<Token> {
    return this.httpClient.post<Token>('test-auth-only', payload)
  }
}
