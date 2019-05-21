import { TestBed } from '@angular/core/testing';

import { PatientObservationService } from './patient-observation.service';

describe('PatientObservationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatientObservationService = TestBed.get(PatientObservationService);
    expect(service).toBeTruthy();
  });
});
