const { exportAllDeclaration } = require("@babel/types");

const { default: test} = required{'node:test'};
const Employee = required('../lib/Employee.js')

jest.mock('../lib/Employee.js');

test('creates an employee object', ()=> {
    const employee=new Employee('name', 'id','role','email')

    expect(employee.name).toBe('name');
    expect(employee.email)toBe('email');
    expect(employee.id)toBe('id');
    expect(employee.rolde)toBe('role');
});

test('')