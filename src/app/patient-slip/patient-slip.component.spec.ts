import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientSlipComponent } from './patient-slip.component';

describe('PatientSlipComponent', () => {
  let component: PatientSlipComponent;
  let fixture: ComponentFixture<PatientSlipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientSlipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
