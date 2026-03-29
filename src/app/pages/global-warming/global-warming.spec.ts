import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalWarming } from './global-warming';

describe('GlobalWarming', () => {
  let component: GlobalWarming;
  let fixture: ComponentFixture<GlobalWarming>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalWarming],
    }).compileComponents();

    fixture = TestBed.createComponent(GlobalWarming);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
