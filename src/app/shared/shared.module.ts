import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth-interceptor/auth.interceptor';
import { SortingPipe } from './pipes/sorting-pipe/sorting.pipe';
@NgModule({
  declarations: [
    SortingPipe
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  exports: [
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SortingPipe,
    MatDialogModule,
    MatSnackBarModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ]
})
export class SharedModule { }
