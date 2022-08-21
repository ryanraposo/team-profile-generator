const inquirer = require('inquirer');

const { Manager, Engineer, Intern } = require('./lib/Employee.js');

const { generatePage } = require('./src/page-template.js');
const { copyFile, writeFile } = require('./utils/generate-site.js');


function promptTeam(teamData) {
    if (!teamData) {
        teamData = [];
    }
    console.log(`
    =================
    Add a Team Member
    =================
    `);
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What kind of team member would you like to add?',
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter a name: (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name for the team member!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter an employee ID: (Required)',
            validate: IDInput => {
                if (IDInput) {
                    return true;
                } else {
                    console.log('Please enter an employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter an email address: (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter an office number:',
            when: ({ role }) => {
                if (role == 'Manager') {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter a GitHub:',
            when: ({ role }) => {
                if (role == 'Engineer') {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter a school:',
            when: ({ role }) => {
                if (role == 'Intern') {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddTeamMember',
            message: 'Would you like to add another team member?',
            default: false
        }
    ])
    .then(memberData => {
        teamData.push(memberData);
        if (memberData.confirmAddTeamMember) {
          return promptTeam(teamData);
        } else {
          return teamData;
        }
    });
};

promptTeam()
    .then((teamData) => {
        let team = [];
        for (const member of teamData) {
            if (member.role == 'Manager') {
                const manager = new Manager(member.name, member.id, member.email, member.officeNumber);
                team.push(manager);
            }
            if (member.role == 'Engineer') {
                const engineer = new Engineer(member.name, member.id, member.email, member.github);
                team.push(engineer);
            }
            if (member.role == 'Intern') {
                const intern = new Intern(member.name, member.id, member.email, member.school);
                team.push(intern);
            }
        }
        return generatePage(team);
    })
    .then(pageHTML => {
        writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });
