import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './containers/login/login.component';
import { AuthApiService } from './services/auth-api/auth-api.service';
import { AuthControllerService } from './services/auth-controller/auth-controller.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
  ],
  providers: [
    AuthApiService,
    AuthControllerService,
  ]
})
export class AuthModule {}
