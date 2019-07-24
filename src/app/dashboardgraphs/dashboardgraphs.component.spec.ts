import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardgraphsComponent } from './dashboardgraphs.component';

describe('DashboardgraphsComponent', () => {
  let component: DashboardgraphsComponent;
  let fixture: ComponentFixture<DashboardgraphsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardgraphsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardgraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
