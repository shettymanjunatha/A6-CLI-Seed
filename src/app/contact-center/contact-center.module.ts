import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CcListComponent } from './cc-list/cc-list.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [CcListComponent],
})
export class ContactCenterModule { }
