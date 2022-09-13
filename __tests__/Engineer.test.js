const Engineer = require('../lib/Engineer')

test('Creates new Engineer', () => {
    const employee = new Engineer('Malek Mekdashi', 2, 'malekmekdashi@gmail.com', 'malekmekdashi');

    expect(employee.name).toBe("Malek Mekdashi");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.github).toEqual(expect.any(String));
});

test('Checks the methods in the Engineer class', () => {
    const employee = new Engineer('Malek Mekdashi', 2, 'malekmekdashi@gmail.com', 'malekmekdashi');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getGithub()).toBe(employee.github);
    expect(employee.getRole()).toBe('Engineer');
})