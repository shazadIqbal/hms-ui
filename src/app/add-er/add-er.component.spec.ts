import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddErComponent } from './add-er.component';

describe('AddErComponent', () => {
  let component: AddErComponent;
  let fixture: ComponentFixture<AddErComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddErComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddErComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
