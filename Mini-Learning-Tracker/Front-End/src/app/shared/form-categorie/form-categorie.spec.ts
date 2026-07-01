import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCategorie } from './form-categorie';

describe('FormCategorie', () => {
  let component: FormCategorie;
  let fixture: ComponentFixture<FormCategorie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCategorie],
    }).compileComponents();

    fixture = TestBed.createComponent(FormCategorie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
