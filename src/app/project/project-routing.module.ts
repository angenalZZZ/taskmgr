import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { services } from '../services';
import { ProjectListComponent } from './project-list/project-list.component';

const routes: Routes = [
  { 
    path: 'projects', 
    component: ProjectListComponent,
    canActivate: [ services.authGuard ],
    canLoad: [ services.authGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }