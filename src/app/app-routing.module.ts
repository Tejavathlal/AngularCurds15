import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRegistrationComponent } from './Component/create-registration/create-registration.component';
import { UserDetailsComponent } from './Component/user-details/user-details.component';
import { RegistrationListComponent } from './Component/registration-list/registration-list.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'register' },
  { path: 'register', component: CreateRegistrationComponent },
  { path: 'update/:id', component: CreateRegistrationComponent },
  { path: 'detail/:id', component: UserDetailsComponent },
  { path: 'list', component: RegistrationListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
