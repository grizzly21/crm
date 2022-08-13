import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

export const authRouters: Routes = [
  {}
]

@NgModule({
  imports: [RouterModule.forChild(authRouters)],
  exports: [RouterModule]
})
export class AuthRoutingModule{}
