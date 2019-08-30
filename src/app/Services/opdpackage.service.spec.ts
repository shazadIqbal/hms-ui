import { TestBed } from '@angular/core/testing';

import { OpdpackageService } from './opdpackage.service';

describe('OpdpackageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpdpackageService = TestBed.get(OpdpackageService);
    expect(service).toBeTruthy();
  });
});
