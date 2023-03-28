import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { GendergreetingsPipe } from './gendergreetings.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AccountDetailsComponent,
    GendergreetingsPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
