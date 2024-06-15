import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeSectionComponent, } from './Component/home-section/home-section.component';
import {AboutSectionComponent} from './Component/about-section/about-section.component';
import { MySkillsSectionComponent } from './Component/my-skills-section/my-skills-section.component';
import { MyProjectSectionComponent } from './Component/my-project-section/my-project-section.component';
import { MyBlogsSectionComponent } from './Component/my-blogs-section/my-blogs-section.component';
import { MyContactSectionComponent } from './Component/my-contact-section/my-contact-section.component';
import { MyFollowMeSectionComponent } from './Component/my-follow-me-section/my-follow-me-section.component';
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeSectionComponent,AboutSectionComponent,MySkillsSectionComponent,MyProjectSectionComponent,MyBlogsSectionComponent,MyContactSectionComponent,MyFollowMeSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
