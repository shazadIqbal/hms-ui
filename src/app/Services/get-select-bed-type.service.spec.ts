import { TestBed } from '@angular/core/testing';

import { GetSelectBedTypeService } from './get-select-bed-type.service';

describe('GetSelectBedTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetSelectBedTypeService = TestBed.get(GetSelectBedTypeService);
    expect(service).toBeTruthy();
  });
});
