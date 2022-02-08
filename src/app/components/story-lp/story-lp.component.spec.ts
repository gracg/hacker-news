import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryLpComponent } from './story-lp.component';

describe('StoryLpComponent', () => {
  let component: StoryLpComponent;
  let fixture: ComponentFixture<StoryLpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryLpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryLpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
