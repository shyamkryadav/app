import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyContactSectionComponent } from './my-contact-section.component';

describe('MyContactSectionComponent', () => {
  let component: MyContactSectionComponent;
  let fixture: ComponentFixture<MyContactSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyContactSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyContactSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
