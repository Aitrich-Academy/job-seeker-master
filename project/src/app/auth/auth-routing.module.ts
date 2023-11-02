import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterationComponent } from './components/registeration/registeration.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

const routes: Routes = [{
  path:'login',component:LoginComponent
}
,
{path:'signup',component:RegisterationComponent},
{
  path:'spinner',component:SpinnerComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
