import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentosComponent } from './components/departamentos-component/departamentos-component';
import { CreateComponent } from './components/create-component/create-component';
import { DetailsComponent } from './components/details-component/details-component';
import { EditComponent } from './components/edit-component/edit-component';


const routes: Routes = [
  {path: "home", component: DepartamentosComponent},
  {path: "create", component: CreateComponent},
  {path: "details/:id/:nombre/:localidad", component: DetailsComponent},
  {path: "edit/:id", component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
