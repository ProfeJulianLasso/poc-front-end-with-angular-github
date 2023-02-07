import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmplPasswordRecoveryComponent } from './tmpl-password-recovery.component';

describe('TmplPasswordRecoveryComponent', () => {
  let component: TmplPasswordRecoveryComponent;
  let fixture: ComponentFixture<TmplPasswordRecoveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TmplPasswordRecoveryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TmplPasswordRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
