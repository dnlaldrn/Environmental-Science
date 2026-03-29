import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimateComponent } from './climate-component';

describe('ClimateComponent', () => {
  let component: ClimateComponent;
  let fixture: ComponentFixture<ClimateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClimateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClimateComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
