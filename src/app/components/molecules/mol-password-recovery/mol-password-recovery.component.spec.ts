import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolPasswordRecoveryComponent } from './mol-password-recovery.component';

describe('MolPasswordRecoveryComponent', () => {
  let component: MolPasswordRecoveryComponent;
  let fixture: ComponentFixture<MolPasswordRecoveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MolPasswordRecoveryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MolPasswordRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
