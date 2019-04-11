import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppoinmentListComponent } from './add-appoinment-list.component';

describe('AddAppoinmentListComponent', () => {
  let component: AddAppoinmentListComponent;
  let fixture: ComponentFixture<AddAppoinmentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAppoinmentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAppoinmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
