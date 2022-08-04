import inquirer from 'inquirer';


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
    Add a new team member
    =================
    `);
    return inquirer.prompt([
      {
            type: 'checkbox',
            name: 'languages',
            message: 'Manager/Team Member?',
            choices: ['Manager', 'Team Member']
      },
      {
        type: 'input',
        name: 'name',
        message: 'Enter the name of a team member: (Required)',
        validate: teamMemberInput => {
            if (teamData) {
                return true;
            } else {
                console.log('Please enter the name of a team member!');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'position',
        message: 'Enter some information about the team member: (Required)',
        validate: infoInput => {
            if (infoInput) {
                return true;
            } else {
                console.log('Please enter some information about the team member!');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: 'Enter an ID for the team member: (Required)',
        validate: infoInput => {
            if (infoInput) {
                return true;
            } else {
                console.log('Provide an ID for the team member!');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter an email for the team member: (Required)',
        validate: linkInput => {
            if (linkInput) {
                return true;
            } else {
                console.log('Please enter an email for the team member!');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter a github for the team member: (Required)',
        validate: linkInput => {
            if (linkInput) {
                return true;
            } else {
                console.log('Please enter a github for the team member!');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter an email for the team member: (Required)',
        validate: linkInput => {
            if (linkInput) {
                return true;
            } else {
                console.log('Please enter an email for the team member!');
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