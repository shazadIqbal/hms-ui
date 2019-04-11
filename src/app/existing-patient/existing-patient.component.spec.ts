import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingPatientComponent } from './existing-patient.component';

describe('ExistingPatientComponent', () => {
  let component: ExistingPatientComponent;
  let fixture: ComponentFixture<ExistingPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
