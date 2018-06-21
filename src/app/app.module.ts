import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TestsComponent } from './tests/tests.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { NewsComponent } from './news/news.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FollowusComponent } from './followus/followus.component';
import { MyaccountComponent } from './myaccount/myaccount.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tests', component: TestsComponent},
  { path: 'doctors', component: DoctorsComponent},
  { path: 'appointments', component: AppointmentsComponent},
  { path: 'news', component: NewsComponent},
  { path: 'contact', component: ContactusComponent},
  { path: 'follow', component: FollowusComponent},
  { path: 'account', component: MyaccountComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TestsComponent,
    DoctorsComponent,
    AppointmentsComponent,
    NewsComponent,
    ContactusComponent,
    FollowusComponent,
    MyaccountComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
