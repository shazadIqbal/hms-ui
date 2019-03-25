import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationexComponent } from './validationex.component';

describe('ValidationexComponent', () => {
  let component: ValidationexComponent;
  let fixture: ComponentFixture<ValidationexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
