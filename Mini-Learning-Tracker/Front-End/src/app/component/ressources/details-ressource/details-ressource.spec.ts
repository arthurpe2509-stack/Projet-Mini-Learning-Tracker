import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRessource } from './details-ressource';

describe('DetailsRessource', () => {
  let component: DetailsRessource;
  let fixture: ComponentFixture<DetailsRessource>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsRessource],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsRessource);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
