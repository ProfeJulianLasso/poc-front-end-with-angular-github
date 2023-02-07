import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmParagraphComponent } from './atm-paragraph.component';

describe('AtmParagraphComponent', () => {
  let component: AtmParagraphComponent;
  let fixture: ComponentFixture<AtmParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtmParagraphComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtmParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
