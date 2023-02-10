import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { initializeApp } from 'src/app/initialize';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
 providers: [{
   provide: APP_INITIALIZER,
   useFactory: () => initializeApp,
   multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }