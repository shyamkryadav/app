import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBlogsSectionComponent } from './my-blogs-section.component';

describe('MyBlogsSectionComponent', () => {
  let component: MyBlogsSectionComponent;
  let fixture: ComponentFixture<MyBlogsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyBlogsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyBlogsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
