import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee } from './employee';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const employees = [
      { id: 11, name: 'CEO' },
      { id: 12, name: 'Manager' },
      { id: 13, name: 'Developer' },
      { id: 14, name: 'QA' },
      { id: 15, name: 'Product Owner' },
      { id: 16, name: 'Lead' },
      { id: 17, name: 'Scrum Master' }
    ];
    return {employees};
  }

  // Overrides the genId method to ensure that a employee always has an id.
  // If the employees array is empty,
  // the method below returns the initial number (11).
  // if the employees array is not empty, the method below returns the highest
  // employee id + 1.
  genId(employees: Employee[]): number {
    return employees.length > 0 ? Math.max(...employees.map(employee => employee.id)) + 1 : 11;
  }
}