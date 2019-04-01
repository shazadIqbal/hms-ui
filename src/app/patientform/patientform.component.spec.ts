import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientformComponent } from './patientform.component';

describe('PatientformComponent', () => {
  let component: PatientformComponent;
  let fixture: ComponentFixture<PatientformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
