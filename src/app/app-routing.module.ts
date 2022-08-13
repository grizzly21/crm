import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthContainerComponent } from "./auth/auth-container/auth-container.component";
import { authRouters } from "./auth/auth-routing.module"

const routes: Routes = [
  {path: 'auth', component: AuthContainerComponent, children: authRouters}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
