import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulseButtonComponent } from './pulse-button.component';

describe('PulseButtonComponent', () => {
  let component: PulseButtonComponent;
  let fixture: ComponentFixture<PulseButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PulseButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PulseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
