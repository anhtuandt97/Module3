import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component';
import { CustomerListComponent } from './components/customers/customer-list/customer-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'employee-list', component: EmployeeListComponent},
  {path: 'customer-list', component: CustomerListComponent},
  {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  declarations: [HomeComponent, PageNotFoundComponent, EmployeeListComponent, CustomerListComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
