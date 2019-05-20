import { TestBed } from '@angular/core/testing';

import { PatientTransactionsService } from './patient-transactions.service';

describe('PatientTransactionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatientTransactionsService = TestBed.get(PatientTransactionsService);
    expect(service).toBeTruthy();
  });
});
