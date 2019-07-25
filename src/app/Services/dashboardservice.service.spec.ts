import { TestBed } from '@angular/core/testing';

import { DashboardserviceService } from './dashboardservice.service';

describe('DashboardserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardserviceService = TestBed.get(DashboardserviceService);
    expect(service).toBeTruthy();
  });
});
