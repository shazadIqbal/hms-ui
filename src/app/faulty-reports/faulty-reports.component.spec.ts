import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaultyReportsComponent } from './faulty-reports.component';

describe('FaultyReportsComponent', () => {
  let component: FaultyReportsComponent;
  let fixture: ComponentFixture<FaultyReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaultyReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaultyReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
