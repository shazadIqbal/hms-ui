import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLabCatComponent } from './add-lab-cat.component';

describe('AddLabCatComponent', () => {
  let component: AddLabCatComponent;
  let fixture: ComponentFixture<AddLabCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLabCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLabCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
