import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';
import { SigninRedirectCallbackComponent } from './auth/signin-redirect-callback.component';
import { SignoutRedirectCallbackComponent } from './auth/signout-redirect-callback.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { CourseComponent } from './course/course.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'course', component: CourseComponent },
  { path: 'signin-callback', component: SigninRedirectCallbackComponent },
  { path: 'signout-callback', component: SignoutRedirectCallbackComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
