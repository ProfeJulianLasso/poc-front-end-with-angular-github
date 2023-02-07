import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmLinkButtonComponent } from './atm-link-button.component';

describe('AtmLinkButtonComponent', () => {
  let component: AtmLinkButtonComponent;
  let fixture: ComponentFixture<AtmLinkButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtmLinkButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtmLinkButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
