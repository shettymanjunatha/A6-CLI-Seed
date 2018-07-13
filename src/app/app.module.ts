import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SideNavModule } from './side-nav/side-nav.module';
import { TopNavModule } from './top-nav/top-nav.module';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';
import { ContactCenterModule } from './contact-center/contact-center.module';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    SideNavModule,
    TopNavModule,
    UserModule,
    ContactCenterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
