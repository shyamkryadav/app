import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProjectSectionComponent } from './my-project-section.component';

describe('MyProjectSectionComponent', () => {
  let component: MyProjectSectionComponent;
  let fixture: ComponentFixture<MyProjectSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyProjectSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyProjectSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
