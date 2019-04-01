import { TestBed } from '@angular/core/testing';

import { PatientserviceService } from './patientservice.service';

describe('PatientserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatientserviceService = TestBed.get(PatientserviceService);
    expect(service).toBeTruthy();
  });
});
