import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { EmployeeEditComponent } from './components/employees/employee-edit/employee-edit.component';
import { EmployeeCreateComponent } from './components/employees/employee-create/employee-create.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeEditComponent,
    EmployeeCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
