import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmIconComponent } from './atm-icon.component';

describe('AtmIconComponent', () => {
  let component: AtmIconComponent;
  let fixture: ComponentFixture<AtmIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtmIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtmIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
