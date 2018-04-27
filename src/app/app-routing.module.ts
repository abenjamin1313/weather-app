import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CurrentComponent } from './current/current.component';
import { TendayComponent } from './tenday/tenday.component';

const routes: Routes = [
  { path: '', redirectTo: 'current', pathMatch: 'full'},
  { path: 'tenday', component: TendayComponent },
  { path: 'current', component: CurrentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
