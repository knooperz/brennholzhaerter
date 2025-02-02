import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StammholzComponent } from './stammholz.component';

describe('StammholzComponent', () => {
  let component: StammholzComponent;
  let fixture: ComponentFixture<StammholzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StammholzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StammholzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
