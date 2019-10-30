import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveDoctorListComponent } from './inactive-doctor-list.component';

describe('InactiveDoctorListComponent', () => {
  let component: InactiveDoctorListComponent;
  let fixture: ComponentFixture<InactiveDoctorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InactiveDoctorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InactiveDoctorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
