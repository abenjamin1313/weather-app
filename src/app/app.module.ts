import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { XyzErrorHandlerService } from './error-handler.service';
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
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    {provide: ErrorHandler, useClass: XyzErrorHandlerService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
