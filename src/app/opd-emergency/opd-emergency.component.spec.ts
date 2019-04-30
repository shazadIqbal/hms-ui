import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdEmergencyComponent } from './opd-emergency.component';

describe('OpdEmergencyComponent', () => {
  let component: OpdEmergencyComponent;
  let fixture: ComponentFixture<OpdEmergencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpdEmergencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpdEmergencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
