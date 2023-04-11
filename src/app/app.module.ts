import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeAngularComponent } from 'projects/home-angular/src/public-api';
import { PageNotFoundComponent } from 'projects/page-not-found/src/public-api';
import { PageComponent } from './page/page.component';
import { InputBoxModule } from "../../projects/workflow-box/src/lib/input-box.module";


const routes: Routes = [
  {path:'', redirectTo:'/page',  pathMatch: 'full'},
  { path: 'home-angular', component: HomeAngularComponent,   pathMatch: 'full' },
  { path: 'page', component: PageComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    declarations: [
        AppComponent,
        PageComponent
    ],
    exports: [
        RouterModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        InputBoxModule
    ]
})
export class AppModule { }

