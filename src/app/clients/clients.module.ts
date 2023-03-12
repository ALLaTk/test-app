import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './components/clients/clients.component';
import { SharedModule } from '../shared/shared.module';
import { ClientsControllerService } from './services/clients-controller/clients-controller.service';
import { ClientsApiService } from './services/clients-api/clients-api.service';
import { PushMessageWindowComponent } from './containers/clients-modal-window/push-message-window/push-message-window.component';
import { SearchByNameComponent } from './containers/clients-modal-window/search-by-name/search-by-name.component';
import { SearchByIdComponent } from './containers/clients-modal-window/search-by-id/search-by-id.component';


@NgModule({
  declarations: [
    ClientsComponent,
    PushMessageWindowComponent,
    SearchByNameComponent,
    SearchByIdComponent,
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
  ],
  providers: [
    ClientsApiService,
  ]
})
export class ClientsModule { }
