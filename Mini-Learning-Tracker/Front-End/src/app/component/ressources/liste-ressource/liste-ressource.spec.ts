import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRessource } from './liste-ressource';

describe('ListeRessource', () => {
  let component: ListeRessource;
  let fixture: ComponentFixture<ListeRessource>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeRessource],
    }).compileComponents();

    fixture = TestBed.createComponent(ListeRessource);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
