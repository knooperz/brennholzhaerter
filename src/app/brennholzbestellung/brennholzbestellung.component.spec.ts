import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrennholzbestellungComponent } from './brennholzbestellung.component';

describe('BrennholzbestellungComponent', () => {
  let component: BrennholzbestellungComponent;
  let fixture: ComponentFixture<BrennholzbestellungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrennholzbestellungComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrennholzbestellungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
