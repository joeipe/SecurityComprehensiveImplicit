import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ModulesRoutingModule } from './modules-routing.module';
import { SharedModule } from '../shared/shared.module';
import { WeatherComponent } from './weather/weather.component';
import { SigninRedirectCallbackComponent } from './auth/signin-redirect-callback.component';
import { SignoutRedirectCallbackComponent } from './auth/signout-redirect-callback.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { CourseComponent } from './course/course.component';



@NgModule({
  declarations: [
    HomeComponent,
    WeatherComponent,
    SigninRedirectCallbackComponent,
    SignoutRedirectCallbackComponent,
    UnauthorizedComponent,
    CourseComponent
  ],
  imports: [
    ModulesRoutingModule,
    SharedModule
  ]
})
export class ModulesModule { }
