import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientInputComponent } from './patient-input.component';

describe('PatientInputComponent', () => {
  let component: PatientInputComponent;
  let fixture: ComponentFixture<PatientInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
