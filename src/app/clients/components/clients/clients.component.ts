import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SortKeyWord } from 'src/app/shared/models/sorting';
import { AuthService } from 'src/app/shared/services/auth-service/auth.service';
import { ClientsControllerService } from '../../services/clients-controller/clients-controller.service';
import { FilterService } from '../../services/clients-filter/filter.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FilterService, ClientsControllerService],
})
export class ClientsComponent implements OnInit {

  sort = SortKeyWord;

  constructor(public controller: ClientsControllerService,
    public filter: FilterService, private auth: AuthService) {}

  ngOnInit(): void {
    this.controller.getClients();
  }
}
