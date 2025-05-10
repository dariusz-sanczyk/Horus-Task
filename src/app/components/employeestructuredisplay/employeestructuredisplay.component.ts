import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employeestructuredisplay',
  templateUrl: './employeestructuredisplay.component.html',
  styleUrls: ['./employeestructuredisplay.component.css']
})
export class EmployeestructuredisplayComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {};

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
  };

};
