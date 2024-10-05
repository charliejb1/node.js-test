// const inquirer = require('inquirer');
import inquirer from 'inquirer';
// const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'number',
      message: 'What is your age?',
      name: 'age',
      validate: function (input) {
        const age = Number(input); 
        if (age >= 0 && age <= 120) {
          return true; // 
        }
        return 'Please enter a valid age between 0 and 120.'; // Error message for invalid input
      }
    },
  ])

  .then(answers => {
    console.log('Answers:', answers);
  });