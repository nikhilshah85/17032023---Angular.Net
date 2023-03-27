import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { ClientinfoComponent } from './clientinfo/clientinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpdetailsComponent,
    ClientinfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
