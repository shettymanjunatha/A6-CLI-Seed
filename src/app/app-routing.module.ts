import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { CcListComponent } from './contact-center/cc-list/cc-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/userlist',
    pathMatch: 'full'
  },
  {
    path: 'userlist',
    component: UserListComponent
  },
  {
    path: 'cclist',
    component: CcListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
