import { TestBed } from '@angular/core/testing';

import { OpdLabTestService } from './opd-lab-test.service';

describe('OpdLabTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpdLabTestService = TestBed.get(OpdLabTestService);
    expect(service).toBeTruthy();
  });
});
