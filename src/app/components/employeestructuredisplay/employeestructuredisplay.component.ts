import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeTree } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employeestructuredisplay',
  templateUrl: './employeestructuredisplay.component.html',
  styleUrls: ['./employeestructuredisplay.component.css']
})
export class EmployeestructuredisplayComponent implements OnInit {

  public employees: Employee[] = [];
  public selectedEmployeeId!: string;
  public employeeHierarchy!: EmployeeTree;

  constructor(private employeeService: EmployeeService) {};

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
    this.employeeService.getEmployeeHierarchy().subscribe(employeeHierarchy => this.employeeHierarchy = employeeHierarchy);
  };


  public onSelect(event: Event) {
    this.selectedEmployeeId = (event.target as HTMLSelectElement).value;
    console.log(this.selectedEmployeeId);
    console.log(this.employeeHierarchy);
  };
};
