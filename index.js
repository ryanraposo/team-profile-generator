import inquirer from 'inquirer';

import { Manager, Engineer, Intern } from './lib/Employee.js';

import { generatePage } from './src/page-template.js';
import { copyFile, writeFile } from './utils/generate-site.js';


const promptTeamMembers = promptTeamMembers => {
    if (teamData) {
        if (!teamData.members) {
            teamData.members = [];
        }
    }
    console.log(`
    =================
    Add a team manager
    =================
    `);
    return inquirer.prompt([
    {
        type: 'input',
        name: 'managerName',
        message: 'Enter the name of the team manager: (Required)',
        validate: managerNameInput => {
            if (managerNameInput) {
                return true;
            } else {
                console.log('Please enter the name of the team manager!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerID',
        message: 'Enter an employee ID for the team manager: (Required)',
        validate: managerIDInput => {
            if (managerIDInput) {
                return true;
            } else {
                console.log('Please enter an employee ID for the team manager!');
                return false;
            }
        }
    },
      {
        type: 'input',
        name: 'managerEmail',
        message: 'Enter an email address for the team manager: (Required)',
        validate: managerEmailInput => {
            if (managerEmailInput) {
                return true;
            } else {
                console.log('Please enter an email address for the team manager!');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'managerOfficeNumber',
        message: 'Enter an office number for the team manager: (Required)',
        validate: managerOfficeNumberInput => {
            if (managerOfficeNumberInput) {
                return true;
            } else {
                console.log('Please enter an office number for the team manager!');
                return false;
            }
        }
      }
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
          return promptProject(portfolioData);
        } else {
          return portfolioData;
        }
    });
};


promptUser()
    .then(promptTeamMember)
    .then(promptData => {
        return generatePage(teamData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
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