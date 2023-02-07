import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmplHomeComponent } from './tmpl-home.component';

describe('TmplHomeComponent', () => {
  let component: TmplHomeComponent;
  let fixture: ComponentFixture<TmplHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TmplHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TmplHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
