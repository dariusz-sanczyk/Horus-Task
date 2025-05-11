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
  public selectedEmployeeId: string = '';
  public employeeHierarchy!: EmployeeTree;
  public emmployeeHierarchyTree: Employee[] | null = [];

  constructor(private employeeService: EmployeeService) {};

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
    this.employeeService.getEmployeeHierarchy().subscribe(employeeHierarchy => this.employeeHierarchy = employeeHierarchy);
  };


  public onSelect(event: Event) {
    this.emmployeeHierarchyTree = [];
    this.selectedEmployeeId = (event.target as HTMLSelectElement).value;
    this.emmployeeHierarchyTree = this.findEmployeeTree(this.selectedEmployeeId, this.employeeHierarchy);
  };

  private findEmployeeTree(employeeId: string, employeeHierarchy: EmployeeTree): Employee[] | null {
    if (employeeHierarchy.id === employeeId) {
      return [{ firstName: employeeHierarchy.firstName, lastName: employeeHierarchy.lastName }];
    };
    for (const subordinate of employeeHierarchy.subordinates) {
      const employeeFound = this.findEmployeeTree(employeeId, subordinate);
      if (employeeFound) {
        return [{ firstName: employeeHierarchy.firstName, lastName: employeeHierarchy.lastName },
        ...employeeFound
        ];
      };
    };
    return null;
  };
};
