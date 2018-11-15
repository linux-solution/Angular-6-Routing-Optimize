import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routingComponent, AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './HomeUI/login/login.component';
import { LayoutComponent } from './HomeUI/layout/layout.component';
import { HearderComponent } from './HomeUI/hearder/hearder.component';
import { FooterComponent } from './HomeUI/footer/footer.component';
import { OemPartenersComponent } from './HomeUI/oem-parteners/oem-parteners.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    LayoutComponent,
    LoginComponent,
    HearderComponent,
    FooterComponent,
    OemPartenersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
