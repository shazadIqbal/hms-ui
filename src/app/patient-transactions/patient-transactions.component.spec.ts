import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientTransactionsComponent } from './patient-transactions.component';

describe('PatientTransactionsComponent', () => {
  let component: PatientTransactionsComponent;
  let fixture: ComponentFixture<PatientTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
