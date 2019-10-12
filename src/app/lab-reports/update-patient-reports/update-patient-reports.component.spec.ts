import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePatientReportsComponent } from './update-patient-reports.component';

describe('UpdatePatientReportsComponent', () => {
  let component: UpdatePatientReportsComponent;
  let fixture: ComponentFixture<UpdatePatientReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePatientReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePatientReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
