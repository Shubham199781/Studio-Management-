import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { AddProjectComponent } from "./add-project/add-project.component";
import { TaskListComponent } from "./task-list/task-list.component";
const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [
      {
        path: "add-project",
        component: AddProjectComponent
      },
      {
        path: "task-list",
        component: TaskListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
