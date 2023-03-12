import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable } from 'rxjs';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token$ = new ReplaySubject<string>();
  isNavigationAllowedSubj$ = new BehaviorSubject<boolean>(false);

  constructor(private snackBar: MatSnackBar) {}

  checkToken(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.isNavigationAllowedSubj$.next(true);
    }
  }

  returnIsValueLogin(): Observable<boolean> {
    return this.isNavigationAllowedSubj$;
  }

  openSnackBar(
    message: string,
    action: string,
    duration = 6000
  ) {
    this.snackBar.open(message, action, {
      horizontalPosition: 'center',
      duration: duration,
    });
  }

  error(message: string) {
    this.openSnackBar(message, '');
  }
}
