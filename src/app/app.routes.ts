import { Routes } from '@angular/router';
import { HomeComponent } from '../component/home/home.component';
import { AboutComponent } from '../component/about/about.component';
import { ProgramsComponent } from '../component/programs/programs.component';
import { GetInvolvedComponent } from '../component/get-involved/get-involved.component';
import { ContactComponent } from '../component/contact/contact.component';
import { DonateComponent } from '../component/donate/donate.component';
import { ChildEducationComponent } from '../component/programs/child-education/child-education.component';
import { MentalHealthComponent } from '../component/programs/mental-health/mental-health.component';
import { WomenEmpowermentComponent } from '../component/programs/women-empowerment/women-empowerment.component';




export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'programs', component: ProgramsComponent },
    { path: 'get-involved', component: GetInvolvedComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'donate', component: DonateComponent },
    { path: 'programs/child-education', component: ChildEducationComponent},
    { path: 'programs/mental-health', component: MentalHealthComponent},
    { path: 'programs/women-empowerment', component: WomenEmpowermentComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
  ];