import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable, Subscription, tap } from 'rxjs';
import { AuthService } from '../services/auth-service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  private loginSubscribe: Subscription = new Subscription();

  constructor(private router: Router, private authService: AuthService) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.handleNavigation();
  }

  canLoad():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.handleNavigation();
  }


  handleNavigation() {
    let isValueLogin!: boolean;
    this.loginSubscribe = this.authService
      .returnIsValueLogin()
      .pipe(
        tap((v) => {
          isValueLogin = v;
        }),
      )
      .subscribe();
    return isValueLogin || this.router.parseUrl('/login');
  }

  ngOnDestroy() {
    this.loginSubscribe.unsubscribe();
  }
}
