import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdpackageComponent } from './opdpackage.component';

describe('OpdpackageComponent', () => {
  let component: OpdpackageComponent;
  let fixture: ComponentFixture<OpdpackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpdpackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpdpackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
