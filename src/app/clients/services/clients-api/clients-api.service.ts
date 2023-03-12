import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Clients, ClientsResponse } from '../../models/clients';
import { PushMessage, ResponsePushMessage } from '../../models/push-message';

@Injectable()
export class ClientsApiService {

  constructor(private httpClient: HttpClient) {}

  getClients(token: string): Observable<ClientsResponse> {

    return this.httpClient.get<ClientsResponse>(`v1/${token}/passes`, {
      headers: new HttpHeaders({
        accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token,
      })
    })
  }

  getClientsByName(token: string, firstName: string, lastName: string): Observable<ClientsResponse> {

    return this.httpClient.get<ClientsResponse>(`v1/${token}/passes?search=first_name=${firstName},last_name=${lastName}`, {
      headers: new HttpHeaders({
        accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token,
      })
    })
  }

  getClientsById(token: string, userId: string): Observable<Clients | null> {

    return this.httpClient.get<Clients | null>(`v1/${token}/passes/userid/${userId}`, {
      headers: new HttpHeaders({
        accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token,
      })
    })
  }

  sendPushMessage(payload: PushMessage, token: string): Observable<ResponsePushMessage> {

    return this.httpClient.post<ResponsePushMessage>(`v1/${token}/message/push`, payload, {
      headers: new HttpHeaders({
        accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token,
      })
    });
  }
}
