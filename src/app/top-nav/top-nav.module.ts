import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [TopNavComponent],
  exports: [TopNavComponent]
})
export class TopNavModule { }
