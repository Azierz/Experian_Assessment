import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserdComponent } from './components/add-user/add-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'add', component: AddUserdComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

