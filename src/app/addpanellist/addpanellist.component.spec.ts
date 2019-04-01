import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpanellistComponent } from './addpanellist.component';

describe('AddpanellistComponent', () => {
  let component: AddpanellistComponent;
  let fixture: ComponentFixture<AddpanellistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpanellistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpanellistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
