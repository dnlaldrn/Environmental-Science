import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OzoneShield } from './ozone-shield';

describe('OzoneShield', () => {
  let component: OzoneShield;
  let fixture: ComponentFixture<OzoneShield>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OzoneShield],
    }).compileComponents();

    fixture = TestBed.createComponent(OzoneShield);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
