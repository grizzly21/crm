import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";

export const authRouters: Routes = [
  {path: '', component: LoginComponent}
]

@NgModule({
  imports: [RouterModule.forChild(authRouters)],
  exports: [RouterModule]
})
export class AuthRoutingModule{}
