import { TestBed } from '@angular/core/testing';

import { OpdErService } from './opd-er.service';

describe('OpdErService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpdErService = TestBed.get(OpdErService);
    expect(service).toBeTruthy();
  });
});
