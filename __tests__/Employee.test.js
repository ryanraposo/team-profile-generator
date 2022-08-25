const { Employee, Manager, Engineer, Intern } = require('../lib/Employee')

// Employee
test('creates a new Employee object', () => {
    const employee = new Employee('Steve', 0, 'steve@steve.steve');

    expect(employee.getName()).toBe('Steve');
    expect(employee.getId()).toEqual(0);
    expect(employee.getEmail()).toBe('steve@steve.steve');
    expect(employee.getRole()).toBe('Employee');
});

// Manager
test('creates a new Manager object', () => {
    const manager = new Manager('Dave', 1, 'dave@dave.dave', 10);

    expect(manager.getName()).toBe('Dave');
    expect(manager.getId()).toEqual(1);
    expect(manager.getEmail()).toBe('dave@dave.dave');
    expect(manager.getOfficeNumber()).toEqual(10);
    expect(manager.getRole()).toBe('Manager');
});

// Engineer
test('creates a new Engineer object', () => {
    const engineer = new Engineer('John', 2, 'john@john.john', 'johnhub');

    expect(engineer.getName()).toBe('John');
    expect(engineer.getId()).toEqual(2);
    expect(engineer.getEmail()).toBe('john@john.john');
    expect(engineer.getGithub()).toBe('johnhub');
    expect(engineer.getRole()).toBe('Engineer');
});

// Intern
test('creates a new Intern object', () => {
    const intern = new Intern('Ricky', 3, 'ricky@ricky.ricky', 'School of Ricks');

    expect(intern.getName()).toBe('Ricky');
    expect(intern.getId()).toEqual(3);
    expect(intern.getEmail()).toBe('ricky@ricky.ricky');
    expect(intern.getSchool()).toBe('School of Ricks');
    expect(intern.getRole()).toBe('Intern');
});