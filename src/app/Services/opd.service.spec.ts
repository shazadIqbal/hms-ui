import { TestBed } from '@angular/core/testing';

import { OpdService } from './opd.service';

describe('OpdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpdService = TestBed.get(OpdService);
    expect(service).toBeTruthy();
  });
});
