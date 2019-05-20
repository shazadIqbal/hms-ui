import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GynyObsListComponent } from './gyny-obs-list.component';

describe('GynyObsListComponent', () => {
  let component: GynyObsListComponent;
  let fixture: ComponentFixture<GynyObsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GynyObsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GynyObsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
