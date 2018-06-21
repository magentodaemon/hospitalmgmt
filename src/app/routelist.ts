import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { TestsComponent } from './components/tests/tests.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { NewsComponent } from './components/news/news.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { FollowusComponent } from './components/followus/followus.component';
import { MyaccountComponent } from './components/myaccount/myaccount.component';

export const routelist: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tests', component: TestsComponent},
  { path: 'doctors', component: DoctorsComponent},
  { path: 'appointments', component: AppointmentsComponent},
  { path: 'news', component: NewsComponent},
  { path: 'contact', component: ContactusComponent},
  { path: 'follow', component: FollowusComponent},
  { path: 'account', component: MyaccountComponent}
];
