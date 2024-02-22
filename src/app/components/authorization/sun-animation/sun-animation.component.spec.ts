import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunAnimationComponent } from './sun-animation.component';

describe('SunAnimationComponent', () => {
  let component: SunAnimationComponent;
  let fixture: ComponentFixture<SunAnimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SunAnimationComponent]
    });
    fixture = TestBed.createComponent(SunAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
