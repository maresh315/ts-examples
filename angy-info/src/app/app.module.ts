import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeRouteGuard } from './home-route-guard';
import { SessionRouteGuard } from './session-route-guard';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RoleAccessDirective } from './role-access.directive';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    RoleAccessDirective,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HomeRouteGuard,
    SessionRouteGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
