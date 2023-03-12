import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthControllerService } from '../../services/auth-controller/auth-controller.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  formLogin: FormGroup = new FormGroup({
    login: new FormControl('', [
      Validators.required,
    ]),
    password: new FormControl('', [
      Validators.required,
    ]),
  });

  constructor(
    private controller: AuthControllerService,
    private router: Router,
  ) {}

  setLoginValue(): void {
    this.controller.getToken(this.formLogin.value);
    this.router.navigate(['/clients']);
  }
}
