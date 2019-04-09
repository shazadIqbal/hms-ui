import { TestBed } from '@angular/core/testing';

import { ErserviceService } from './erservice.service';

describe('ErserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErserviceService = TestBed.get(ErserviceService);
    expect(service).toBeTruthy();
  });
});
