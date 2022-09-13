const Employee = require('../lib/Employee')

test('does instantiating an employee class create an object with a name, id, and email?', () => {
    const employee = new Employee('Malek Mekdashi', 1, 'malekmekdashi@gmail.com');
    
    expect(employee.name).toBe("Malek Mekdashi");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('Checks all methods for Employee class', () => {
    const employee = new Employee('Malek Mekdashi', 1, 'malekmekdashi@gmail.com');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRole()).toBe('Employee');
});
