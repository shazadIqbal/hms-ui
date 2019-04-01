import { TestBed } from '@angular/core/testing';

import { PanellistservService } from './panellistserv.service';

describe('PanellistservService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PanellistservService = TestBed.get(PanellistservService);
    expect(service).toBeTruthy();
  });
});
