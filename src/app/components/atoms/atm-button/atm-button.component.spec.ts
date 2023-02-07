import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmButtonComponent } from './atm-button.component';

describe('AtmButtonComponent', () => {
  let component: AtmButtonComponent;
  let fixture: ComponentFixture<AtmButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtmButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtmButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
