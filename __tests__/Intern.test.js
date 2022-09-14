const {Intern} = require('../lib/Intern');

test('Creates new Intern', () => {
    const employee = new Intern('Malek Mekdashi', 2, 'malekmekdashi@gmail.com', 'UCI');

    expect(employee.name).toBe("Malek Mekdashi");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.school).toEqual(expect.any(String));
});

test('Checks the methods in the Engineer class', () => {
    const employee = new Intern('Malek Mekdashi', 2, 'malekmekdashi@gmail.com', 'malekmekdashi');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getSchool()).toBe(employee.school);
    expect(employee.getRole()).toBe('Intern');
})