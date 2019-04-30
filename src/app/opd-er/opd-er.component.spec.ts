import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdErComponent } from './opd-er.component';

describe('OpdErComponent', () => {
  let component: OpdErComponent;
  let fixture: ComponentFixture<OpdErComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpdErComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpdErComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
