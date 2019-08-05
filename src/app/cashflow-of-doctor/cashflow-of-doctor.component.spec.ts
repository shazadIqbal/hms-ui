import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashflowOfDoctorComponent } from './cashflow-of-doctor.component';

describe('CashflowOfDoctorComponent', () => {
  let component: CashflowOfDoctorComponent;
  let fixture: ComponentFixture<CashflowOfDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashflowOfDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashflowOfDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
