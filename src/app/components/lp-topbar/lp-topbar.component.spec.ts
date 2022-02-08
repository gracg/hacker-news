import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpTopbarComponent } from './lp-topbar.component';

describe('LpTopbarComponent', () => {
  let component: LpTopbarComponent;
  let fixture: ComponentFixture<LpTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LpTopbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LpTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
