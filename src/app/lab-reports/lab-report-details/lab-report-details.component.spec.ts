import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabReportDetailsComponent } from './lab-report-details.component';

describe('LabReportDetailsComponent', () => {
  let component: LabReportDetailsComponent;
  let fixture: ComponentFixture<LabReportDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabReportDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabReportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
