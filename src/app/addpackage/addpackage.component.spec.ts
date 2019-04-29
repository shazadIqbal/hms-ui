import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpackageComponent } from './addpackage.component';

describe('AddpackageComponent', () => {
  let component: AddpackageComponent;
  let fixture: ComponentFixture<AddpackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
