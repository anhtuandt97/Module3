import {Component, OnDestroy, OnInit} from '@angular/core';
import {EmployeeService} from '../../../services/employee.service';
import {Subscription} from 'rxjs';
import {Employee} from '../../../model/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  public subscription: Subscription;
  public employee: Employee[] = [];
  constructor( private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.subscription = this.employeeService.getAllEmployee().subscribe((data: Employee[]) => {
     this.employee = data;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
