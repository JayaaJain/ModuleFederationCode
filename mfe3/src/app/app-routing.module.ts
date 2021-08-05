import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserViewComponent } from './components/user-view/user-view.component';

const routes: Routes = [
  // {
  //   path:'userview',
  //   pathMatch:'full',
  //   component: UserViewComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
