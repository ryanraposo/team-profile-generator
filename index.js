const inquirer = require('inquirer');

const { Manager, Engineer, Intern } = require('./lib/Employee.js');

// import { generatePage } from './src/page-template.js';
// import { copyFile, writeFile } from './utils/generate-site.js';


// function promptTeamManager() {
//     return inquirer.prompt([
//     {
//         type: 'input',
//         name: 'managerName',
//         message: 'Enter the name of the team manager: (Required)',
//         validate: managerNameInput => {
//             if (managerNameInput) {
//                 return true;
//             } else {
//                 console.log('Please enter the name of the team manager!');
//                 return false;
//             }
//         }
//     },
//     {
//         type: 'input',
//         name: 'managerID',
//         message: 'Enter an employee ID for the team manager: (Required)',
//         validate: managerIDInput => {
//             if (managerIDInput) {
//                 return true;
//             } else {
//                 console.log('Please enter an employee ID for the team manager!');
//                 return false;
//             }
//         }
//     },
//     {
//         type: 'input',
//         name: 'managerEmail',
//         message: 'Enter an email address for the team manager: (Required)',
//         validate: managerEmailInput => {
//             if (managerEmailInput) {
//                 return true;
//             } else {
//                 console.log('Please enter an email address for the team manager!');
//                 return false;
//             }
//         }
//     },
//     {
//         type: 'input',
//         name: 'managerOfficeNumber',
//         message: 'Enter an office number for the team manager: (Required)',
//         validate: managerOfficeNumberInput => {
//             if (managerOfficeNumberInput) {
//                 return true;
//             } else {
//                 console.log('Please enter an office number for the team manager!');
//                 return false;
//             }
//         }
//     }
//     ])
// };


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
    .then((teamData) => {console.log(teamData);})




// promptUser()
//     .then(promptTeamMember)
//     .then(promptData => {
//         return generatePage(teamData);
//     })
//     .then(pageHTML => {
//         return writeFile(pageHTML);
//     })
//     .then(writeFileResponse => {
//         console.log(writeFileResponse);
//         return copyFile();
//     })
//     .then(copyFileResponse => {
//         console.log(copyFileResponse);
//     })
//     .catch(err => {
//         console.log(err);
//     });