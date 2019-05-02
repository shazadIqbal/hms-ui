import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdGynyComponent } from './opd-gyny.component';

describe('OpdGynyComponent', () => {
  let component: OpdGynyComponent;
  let fixture: ComponentFixture<OpdGynyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpdGynyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpdGynyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
