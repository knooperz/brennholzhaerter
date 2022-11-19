import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolztransporteComponent } from './holztransporte.component';

describe('HolztransporteComponent', () => {
  let component: HolztransporteComponent;
  let fixture: ComponentFixture<HolztransporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolztransporteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolztransporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
