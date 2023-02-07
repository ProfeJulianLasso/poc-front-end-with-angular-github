import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmTitleComponent } from './atm-title.component';

describe('AtmTitleComponent', () => {
  let component: AtmTitleComponent;
  let fixture: ComponentFixture<AtmTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtmTitleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtmTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
