import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeAngularComponent } from 'projects/home-angular/src/public-api';
import { PageNotFoundComponent } from 'projects/page-not-found/src/public-api';


const routes: Routes = [
  {path:'', redirectTo:'/page',  pathMatch: 'full'},
  { path: 'home-angular', component: HomeAngularComponent,   pathMatch: 'full' },
  { path: 'page', component: HomeAngularComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  exports:[
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
