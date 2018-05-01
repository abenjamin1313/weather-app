import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
// service
import { XyzErrorHandlerService } from './service/error-handler.service';
import { LocalWeatherService } from './service/local-weather.service';
// Material Design Components
import { MaterialModule } from './material.module';
// In App Components
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { CurrentComponent } from './current/current.component';
import { TendayComponent } from './tenday/tenday.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrentComponent,
    TendayComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    LocalWeatherService,
    {provide: ErrorHandler, useClass: XyzErrorHandlerService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
