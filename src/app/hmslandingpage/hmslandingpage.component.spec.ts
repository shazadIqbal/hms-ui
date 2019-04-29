import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HmslandingpageComponent } from './hmslandingpage.component';

describe('HmslandingpageComponent', () => {
  let component: HmslandingpageComponent;
  let fixture: ComponentFixture<HmslandingpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HmslandingpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HmslandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
