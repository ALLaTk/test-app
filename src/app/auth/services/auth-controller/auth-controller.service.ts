import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth-service/auth.service';
import { Login } from '../../models/login';
import { AuthApiService } from '../auth-api/auth-api.service';

@Injectable()
export class AuthControllerService {

  constructor(private api: AuthApiService, private auth: AuthService) {}

  getToken(login: Login): void {
    if(login.login.trim() && login.password.trim()) {
      this.auth.isNavigationAllowedSubj$.next(true)
      this.api.getToken(login).subscribe((token) => {
        this.auth.token$.next(token.auth_token)
        localStorage.setItem('token', token.auth_token)
      });
    }
  }
}
