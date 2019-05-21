import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientObservationComponent } from './patient-observation.component';

describe('PatientObservationComponent', () => {
  let component: PatientObservationComponent;
  let fixture: ComponentFixture<PatientObservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientObservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientObservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
