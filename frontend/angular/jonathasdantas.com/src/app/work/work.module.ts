import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work.component';
import { RouterModule, Routes } from "@angular/router";

const workRoutes: Routes = [
  {
    path: 'work',
    component: WorkComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(workRoutes),
    CommonModule
  ],
  declarations: [
    WorkComponent,
  ]
})
export class WorkModule { }
