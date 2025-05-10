import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private _http: HttpClient) {};

  getEmployees(): Observable<Employee[]> {
    return this._http.get<Employee[]>('../../assets/employees.json');

  };
};

