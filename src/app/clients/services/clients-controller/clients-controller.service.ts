import { Injectable, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { filter, map, mergeMap, ReplaySubject, Subscription, tap } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth-service/auth.service';
import { PushMessageWindowComponent } from '../../containers/clients-modal-window/push-message-window/push-message-window.component';
import { SearchByIdComponent } from '../../containers/clients-modal-window/search-by-id/search-by-id.component';
import { SearchByNameComponent } from '../../containers/clients-modal-window/search-by-name/search-by-name.component';
import { Clients} from '../../models/clients';
import { PushMessage, PushMessageModalWindow } from '../../models/push-message';
import { SearchById, SearchByName } from '../../models/search';
import { ClientsApiService } from '../clients-api/clients-api.service';

@Injectable({
  providedIn: 'any'
})
export class ClientsControllerService implements OnDestroy {

  clients$ = new ReplaySubject<Clients[]>();
  private subscribe: Subscription = new Subscription();

  constructor(private api: ClientsApiService, private router: Router, private dialog: MatDialog, private auth: AuthService) { }

  getClients(): void {

    const token: string | null = localStorage.getItem('token')

    if (token) {
      this.subscribe = this.api.getClients(token).subscribe((item) => this.clients$.next(item.passes))
    }
    else {
      this.subscribe = this.auth.token$.pipe(
        mergeMap((token) =>
        this.api.getClients(token)),
        map((elem) => elem)).subscribe((item) => this.clients$.next(item.passes))
    }
  }

  getClientsByName(firstName: string, lastName: string): void {
    const token: string | null = localStorage.getItem('token')

    if (token) {
      this.subscribe = this.api.getClientsByName(token, firstName, lastName).subscribe((item) => this.clients$.next(item.passes))
    }
    else {
      this.subscribe = this.auth.token$.pipe(
        mergeMap((token) =>
        this.api.getClientsByName(token, firstName, lastName)),
        map((elem) => elem)).subscribe((item) => this.clients$.next(item.passes))
    }
  }

  getClientsById(userId: string): void {
    const token: string | null = localStorage.getItem('token')

    if (token) {
      this.subscribe = this.api.getClientsById(token, userId).subscribe((item) =>
      item ? this.clients$.next([item]): this.clients$.next([]))
    }
    else {
      this.subscribe = this.auth.token$.pipe(
        mergeMap((token) =>
        this.api.getClientsById(token, userId)),
        map((elem) => elem)).subscribe((item) =>
        item ? this.clients$.next([item]): this.clients$.next([]))
    }
  }

  sendPushMessage(payload: PushMessage) {
    const token: string | null = localStorage.getItem('token')

    if (token) {
      this.subscribe = this.api.sendPushMessage(payload, token).subscribe((item) => item)
    }
    else {
      this.subscribe = this.auth.token$.pipe(
        mergeMap((token) =>
        this.api.sendPushMessage(payload, token)),
        map((elem) => elem)).subscribe((item) => item)
    }
  }


  checkOut(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  openModalWindowForPushMessage(): void {
    const data: PushMessageModalWindow = {
      heading: 'Push message',
      user_id: '',
      date_start: '',
      push_message: '',
    };
    const dialogRef = this.dialog.open(PushMessageWindowComponent, {
      data,
      backdropClass: 'backdropBackground',
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter(
          (modalData) =>
            modalData?.user_id.trim() && modalData?.push_message.trim(),
          ),
        tap((modalData) => {
          const message: PushMessage = {
            user_id: modalData.user_id.trim(),
            date_start: modalData.date_start,
            push_message: modalData.push_message.trim(),
          }
          this.sendPushMessage(message)
        }),
      )
      .subscribe();
  }

  openModalWindowForSearchById(): void {
    const data: SearchById = {
      heading: 'Search by Id',
      id: '',
    };
    const dialogRef = this.dialog.open(SearchByIdComponent, {
      data,
      backdropClass: 'backdropBackground',
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter(
          (modalData) =>
            modalData?.id,
        ),
        tap((modalData) =>
          this.getClientsById(modalData.id)
        ),
      )
      .subscribe();
  }

  openModalWindowForSearchByName(): void {
    const data: SearchByName = {
      heading: 'Search by name',
      firstName: '',
      lastName: '',
    };
    const dialogRef = this.dialog.open(SearchByNameComponent, {
      data,
      backdropClass: 'backdropBackground',
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter(
          (modalData) =>
            modalData?.firstName.trim() && modalData?.lastName.trim(),
        ),
        tap((modalData) =>
          this.getClientsByName(modalData.firstName, modalData.lastName)
        ),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
}
