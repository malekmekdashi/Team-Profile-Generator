const {Manager} = require('../lib/Manager');

test('Creates new Manager', () => {
    const employee = new Manager('John Wick', 3, 'JohnWick@gmail.com', 20);

    expect(employee.name).toBe("John Wick");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.officeNumber).toEqual(expect.any(Number));
});

test('Checks the methods in the Manager class', () => {
    const employee = new Manager('John Wick', 3, 'JohnWick@gmail.com', 20);

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getOfficeNumber()).toBe(employee.officeNumber);
    expect(employee.getRole()).toBe('Manager');
});