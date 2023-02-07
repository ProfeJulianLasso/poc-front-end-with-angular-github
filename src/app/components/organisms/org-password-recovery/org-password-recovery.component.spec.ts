import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgPasswordRecoveryComponent } from './org-password-recovery.component';

describe('OrgPasswordRecoveryComponent', () => {
  let component: OrgPasswordRecoveryComponent;
  let fixture: ComponentFixture<OrgPasswordRecoveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgPasswordRecoveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgPasswordRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
