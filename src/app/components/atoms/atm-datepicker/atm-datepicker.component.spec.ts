import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmDatepickerComponent } from './atm-datepicker.component';

describe('AtmDatepickerComponent', () => {
  let component: AtmDatepickerComponent;
  let fixture: ComponentFixture<AtmDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtmDatepickerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtmDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
