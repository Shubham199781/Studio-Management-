import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StaffRoutingModule } from "./staff-routing.module";
import { StaffComponent } from "./staff.component";
import { DemoMaterialModule } from "./../../shared/material/material.module";
@NgModule({
  declarations: [StaffComponent],
  imports: [CommonModule, StaffRoutingModule, DemoMaterialModule]
})
export class StaffModule {}
