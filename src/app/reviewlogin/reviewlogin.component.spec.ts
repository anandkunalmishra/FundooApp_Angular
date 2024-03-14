import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewloginComponent } from './reviewlogin.component';

describe('ReviewloginComponent', () => {
  let component: ReviewloginComponent;
  let fixture: ComponentFixture<ReviewloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReviewloginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReviewloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
