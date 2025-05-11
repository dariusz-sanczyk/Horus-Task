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
  public emmployeeHierarchyTree: Employee[] = [];

  constructor(private employeeService: EmployeeService) {};

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
    this.employeeService.getEmployeeHierarchy().subscribe(employeeHierarchy => this.employeeHierarchy = employeeHierarchy);
  };


  public onSelect(event: Event) {
    this.selectedEmployeeId = (event.target as HTMLSelectElement).value;
    this.findEmployeeTree(this.selectedEmployeeId, this.employeeHierarchy);
    console.log(this.selectedEmployeeId);
    console.log(this.employeeHierarchy);
    console.log(this.emmployeeHierarchyTree);

  };

  private findEmployeeTree(employeeId: string, employeeHierarchy: EmployeeTree): EmployeeTree | null {
    if (employeeHierarchy.id === employeeId) {
      this.emmployeeHierarchyTree.unshift({ firstName: employeeHierarchy.firstName, lastName: employeeHierarchy.lastName });
      return employeeHierarchy;
    }
    for (const subordinate of employeeHierarchy.subordinates) {
      const employeeFound = this.findEmployeeTree(employeeId, subordinate);
      if (employeeFound) {
        this.emmployeeHierarchyTree.unshift({ firstName: employeeHierarchy.firstName, lastName: employeeHierarchy.lastName });
        return employeeFound;
      }
    };
    return null;
  };
};
