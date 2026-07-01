import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRessources } from './form-ressources';

describe('FormRessources', () => {
  let component: FormRessources;
  let fixture: ComponentFixture<FormRessources>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRessources],
    }).compileComponents();

    fixture = TestBed.createComponent(FormRessources);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
