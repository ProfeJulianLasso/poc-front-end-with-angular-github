import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmTextareaComponent } from './atm-textarea.component';

describe('AtmTextareaComponent', () => {
  let component: AtmTextareaComponent;
  let fixture: ComponentFixture<AtmTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtmTextareaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtmTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
