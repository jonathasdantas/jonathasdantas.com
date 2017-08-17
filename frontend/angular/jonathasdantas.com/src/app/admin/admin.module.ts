import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { Routes, RouterModule } from "@angular/router";

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminLoginComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(adminRoutes),
  ],
  declarations: [ AdminLoginComponent ]
})
export class AdminModule { }
