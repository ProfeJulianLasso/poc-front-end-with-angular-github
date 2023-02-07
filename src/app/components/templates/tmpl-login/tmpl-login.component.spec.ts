import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmplLoginComponent } from './tmpl-login.component';

describe('TmplLoginComponent', () => {
  let component: TmplLoginComponent;
  let fixture: ComponentFixture<TmplLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TmplLoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TmplLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
