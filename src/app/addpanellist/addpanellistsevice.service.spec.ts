import { TestBed } from '@angular/core/testing';

import { AddpanellistseviceService } from './addpanellistsevice.service';

describe('AddpanellistseviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddpanellistseviceService = TestBed.get(AddpanellistseviceService);
    expect(service).toBeTruthy();
  });
});
