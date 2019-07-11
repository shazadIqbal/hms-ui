import { TestBed } from '@angular/core/testing';

import { SignUpServiceService } from './sign-up-service.service';

describe('SignUpServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignUpServiceService = TestBed.get(SignUpServiceService);
    expect(service).toBeTruthy();
  });
});
