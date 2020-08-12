// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from '.../../../node_modules/ngx-spinner';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';

// Angular Material 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

// Components
import { ProfileComponent } from './profile.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { IntroComponent } from '../intro/intro.component';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ExperienceComponent } from '../experience/experience.component';
import { EducationComponent } from '../education/education.component';
import { ReferenceComponent } from '../reference/reference.component';
import { ContactComponent } from '../contact/contact.component';
import { ProjectsComponent } from '../projects/projects.component';



@NgModule({
  
  declarations: [
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    ExperienceComponent,
    EducationComponent,
    ReferenceComponent,
    ContactComponent,
    ProjectsComponent
  ],


  imports: [
    CommonModule,
    FormsModule,
    SnotifyModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
  ],



  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
  ]
})
export class ProfileModule { }
