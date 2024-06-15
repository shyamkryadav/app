import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFollowMeSectionComponent } from './my-follow-me-section.component';

describe('MyFollowMeSectionComponent', () => {
  let component: MyFollowMeSectionComponent;
  let fixture: ComponentFixture<MyFollowMeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyFollowMeSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFollowMeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
