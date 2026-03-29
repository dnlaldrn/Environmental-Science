import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimateChange } from './climate-change';

describe('ClimateChange', () => {
  let component: ClimateChange;
  let fixture: ComponentFixture<ClimateChange>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClimateChange],
    }).compileComponents();

    fixture = TestBed.createComponent(ClimateChange);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
