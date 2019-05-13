import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorquickviewComponent } from './monitorquickview.component';

describe('MonitorquickviewComponent', () => {
  let component: MonitorquickviewComponent;
  let fixture: ComponentFixture<MonitorquickviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorquickviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorquickviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
