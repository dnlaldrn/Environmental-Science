import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OzoneComponent } from './ozone-component';

describe('OzoneComponent', () => {
  let component: OzoneComponent;
  let fixture: ComponentFixture<OzoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OzoneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OzoneComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
