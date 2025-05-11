export interface Employee {
    id?: string;
    firstName: string;
    lastName: string;
};

export interface EmployeeTree extends Employee {
    subordinates: EmployeeTree[];
};