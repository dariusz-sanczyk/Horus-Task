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
  public selectedEmployeeHierarchy: EmployeeTree | null = null;

  constructor(private employeeService: EmployeeService) {};

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
    this.employeeService.getEmployeeHierarchy().subscribe(employeeHierarchy => this.employeeHierarchy = employeeHierarchy);
  };


  public onSelect(event: Event) {
    this.selectedEmployeeId = (event.target as HTMLSelectElement).value;
    this.selectedEmployeeHierarchy = this.findEmployee(this.selectedEmployeeId, this.employeeHierarchy)
    console.log(this.selectedEmployeeId);
    console.log(this.employeeHierarchy);
    console.log(this.selectedEmployeeHierarchy);

  };

  private findEmployee(employeeId: string, employeeHierarchy: EmployeeTree): EmployeeTree | null {
    if (employeeHierarchy.id === employeeId) return employeeHierarchy;
    for (const subordinate of employeeHierarchy.subordinates) {
      const employeeFound = this.findEmployee(employeeId, subordinate);
      if (employeeFound) return employeeFound;
    };
    return null;
  };
};
