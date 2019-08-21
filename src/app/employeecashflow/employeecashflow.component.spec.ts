import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeecashflowComponent } from './employeecashflow.component';

describe('EmployeecashflowComponent', () => {
  let component: EmployeecashflowComponent;
  let fixture: ComponentFixture<EmployeecashflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeecashflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeecashflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
