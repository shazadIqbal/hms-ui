import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErComponent } from './er.component';

describe('ErComponent', () => {
  let component: ErComponent;
  let fixture: ComponentFixture<ErComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
