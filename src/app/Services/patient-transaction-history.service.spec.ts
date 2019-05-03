import { TestBed } from '@angular/core/testing';

import { PatientTransactionHistoryService } from './patient-transaction-history.service';

describe('PatientTransactionHistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatientTransactionHistoryService = TestBed.get(PatientTransactionHistoryService);
    expect(service).toBeTruthy();
  });
});
