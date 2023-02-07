import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmLogoComponent } from './atm-logo.component';

describe('AtmLogoComponent', () => {
  let component: AtmLogoComponent;
  let fixture: ComponentFixture<AtmLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtmLogoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtmLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
