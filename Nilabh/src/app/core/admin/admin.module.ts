import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminComponent} from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import {DemoMaterialModule} from './../../shared/material/material.module';
import { AddProjectComponent } from './add-project/add-project.component';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [AdminComponent, AddProjectComponent, TaskListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DemoMaterialModule
  ]
})
export class AdminModule { }
