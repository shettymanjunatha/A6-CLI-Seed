import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [UserListComponent],
  exports: [UserListComponent]
})
export class UserModule { }
