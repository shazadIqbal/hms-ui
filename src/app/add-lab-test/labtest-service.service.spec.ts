import { TestBed } from '@angular/core/testing';

import { LabtestServiceService } from './labtest-service.service';

describe('LabtestServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LabtestServiceService = TestBed.get(LabtestServiceService);
    expect(service).toBeTruthy();
  });
});
