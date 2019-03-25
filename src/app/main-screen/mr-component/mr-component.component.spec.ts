import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MrComponentComponent } from './mr-component.component';

describe('MrComponentComponent', () => {
  let component: MrComponentComponent;
  let fixture: ComponentFixture<MrComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MrComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
