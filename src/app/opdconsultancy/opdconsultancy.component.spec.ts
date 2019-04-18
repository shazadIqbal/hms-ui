import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdconsultancyComponent } from './opdconsultancy.component';

describe('OpdconsultancyComponent', () => {
  let component: OpdconsultancyComponent;
  let fixture: ComponentFixture<OpdconsultancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpdconsultancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpdconsultancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
