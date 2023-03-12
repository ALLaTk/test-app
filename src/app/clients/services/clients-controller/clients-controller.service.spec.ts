import { TestBed } from '@angular/core/testing';

import { ClientsControllerService } from './clients-controller.service';

describe('ClientsControllerService', () => {
  let service: ClientsControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
