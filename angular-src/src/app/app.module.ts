import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// 2)
//The Angular Router is an optional service that presents a particular component 
//view for a given URL. It is not part of the Angular core. It is in its own library 
//package, @angular/router. Import what you need from it as you would from any other Angular package.
import { RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

// 5)
//A router has no routes until you configure it. The following example creates 
//four route definitions, configures the router via the RouterModule.forRoot 
//method, and adds the result to the AppModule's imports array

//The appRoutes array of routes describes how to navigate. Pass it to 
//the RouterModule.forRoot method in the module imports to configure the router.
const appRoutes: Routes = [

//Instead of adding the "/sidekicks" route, define a wildcard route instead and 
//have it navigate to a simple PageNotFoundComponent.
{path:'', component: HomeComponent},
{path:'register', component: RegisterComponent},
{path:'login', component: LoginComponent},
{path:'dashboard', component: DashboardComponent},
{path:'profile', component: ProfileComponent},
]

@NgModule({
  declarations: [
  AppComponent,
  NavbarComponent,
  NavbarComponent,
  LoginComponent,
  RegisterComponent,
  HomeComponent,
  DashboardComponent,
  ProfileComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  HttpModule,
  // 3)
  RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
