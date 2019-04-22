import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorScreenComponent } from './monitor-screen.component';

describe('MonitorScreenComponent', () => {
  let component: MonitorScreenComponent;
  let fixture: ComponentFixture<MonitorScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
