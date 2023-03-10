import { Injectable } from '@angular/core';
import { Login } from '../../models/login';
import { AuthApiService } from '../auth-api/auth-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthControllerService {

  constructor(private api: AuthApiService) {}

  getToken(login: Login) {
    this.api.getToken(login).subscribe((token) =>
    localStorage.setItem('token', JSON.stringify(token)));
  }
}
