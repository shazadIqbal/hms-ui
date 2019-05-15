import { TestBed } from '@angular/core/testing';

import { OpdGynyService } from './opd-gyny.service';

describe('OpdGynyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpdGynyService = TestBed.get(OpdGynyService);
    expect(service).toBeTruthy();
  });
});
