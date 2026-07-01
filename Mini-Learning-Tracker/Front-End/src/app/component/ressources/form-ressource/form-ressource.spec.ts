import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRessource } from './form-ressource';

describe('FormRessource', () => {
  let component: FormRessource;
  let fixture: ComponentFixture<FormRessource>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRessource],
    }).compileComponents();

    fixture = TestBed.createComponent(FormRessource);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
