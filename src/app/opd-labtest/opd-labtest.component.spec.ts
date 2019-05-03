import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdLabtestComponent } from './opd-labtest.component';

describe('OpdLabtestComponent', () => {
  let component: OpdLabtestComponent;
  let fixture: ComponentFixture<OpdLabtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpdLabtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpdLabtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
