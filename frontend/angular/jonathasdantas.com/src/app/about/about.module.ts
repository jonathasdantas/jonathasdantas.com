import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule, Routes } from "@angular/router";

const aboutRoutes: Routes = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(aboutRoutes),
    CommonModule
  ],
  declarations: [
    AboutComponent,
  ]
})
export class AboutModule { }
