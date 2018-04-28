import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

import { CurrentWeatherService } from './service/current-weather.service';
import { XyzErrorHandlerService } from './error-handler.service';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './header/header.component';
import { CurrentComponent } from './current/current.component';
import { TendayComponent } from './tenday/tenday.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrentComponent,
    TendayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    CurrentWeatherService,
    {provide: ErrorHandler, useClass: XyzErrorHandlerService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
