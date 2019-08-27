import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashflowOfHospitalComponent } from './cashflow-of-hospital.component';

describe('CashflowOfHospitalComponent', () => {
  let component: CashflowOfHospitalComponent;
  let fixture: ComponentFixture<CashflowOfHospitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashflowOfHospitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashflowOfHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
