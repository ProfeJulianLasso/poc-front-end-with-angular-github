import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmSelectComponent } from './atm-select.component';

describe('AtmSelectComponent', () => {
  let component: AtmSelectComponent;
  let fixture: ComponentFixture<AtmSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtmSelectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtmSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
