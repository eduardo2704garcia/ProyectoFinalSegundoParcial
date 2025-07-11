import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevProfile } from './dev-profile';

describe('DevProfile', () => {
  let component: DevProfile;
  let fixture: ComponentFixture<DevProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevProfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
