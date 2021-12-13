import { TestBed } from '@angular/core/testing';

import { HttpserviceNavbarService } from './httpservice-navbar.service';

describe('HttpserviceNavbarService', () => {
  let service: HttpserviceNavbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpserviceNavbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
