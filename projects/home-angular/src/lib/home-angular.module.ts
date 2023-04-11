import { NgModule } from '@angular/core';
import { HomeAngularComponent } from './home-angular.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    HomeAngularComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeAngularComponent
  ]
})
export class HomeAngularModule { }
