import { TestBed } from '@angular/core/testing';

import { AppointmentServiceService } from './appointment-service.service';

describe('AppointmentServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppointmentServiceService = TestBed.get(AppointmentServiceService);
    expect(service).toBeTruthy();
  });
});
