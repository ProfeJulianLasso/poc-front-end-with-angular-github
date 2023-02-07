import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmplDashboardComponent } from './tmpl-dashboard.component';

describe('TmplDashboardComponent', () => {
  let component: TmplDashboardComponent;
  let fixture: ComponentFixture<TmplDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TmplDashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TmplDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
