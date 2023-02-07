import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolModalCheckYourEmailComponent } from './mol-modal-check-your-email.component';

describe('MolModalCheckYourEmailComponent', () => {
  let component: MolModalCheckYourEmailComponent;
  let fixture: ComponentFixture<MolModalCheckYourEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MolModalCheckYourEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MolModalCheckYourEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
