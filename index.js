const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "What is your project name ?",
    },
    {
      type: "input",
      name: "description",
      message: "Project description?",
    },
    {
      type: "input",
      name: "video",
      message: "location of screenshot or video ?",
    },
    {
      type: "input",
      name: "gettingStarted",
      message: "Enter instructions on how to deploy your site?",
    },
    {
      type: "input",
      name: "commanLine",
      message: "Enter command to start project",
    },
    {
      type: "input",
      name: "installation",
      message: "Instructions to deploy site",
    },
    {
      type: "input",
      name: "webpage",
      message: "Enter your webpage address.",
    },
    {
      type: "input",
      name: "linkedin",
      message: "Enter your LinkedIn URL.",
    },
    {
      type: "input",
      name: "twitter",
      message: "Enter your twitter handle.",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email ?",
    },
  ]);
}

function generateHTML(answers) {
  projectname = answers.projectName;
  console.log(answers.projectName);
  return `
  # ${answers.projectName}
  ---

  ## Description
  ---
  > ${answers.description}

  ![screenshot] (screenshot.png)


  ## Getting Started
  ---
  > ${answers.gettingStarted}


  ## Installation
  ---
  > ${answers.installation}

  To launch the program, write the following in the terminal window:
  ${answers.commanLine}
  
  
  `;
}

async function init() {
  console.log("hi");
  try {
    const answers = await promptUser();

    const html = generateHTML(answers);

    await writeFileAsync("README.md", html);

    console.log("Successfully wrote to README.md");
  } catch (err) {
    console.log(err);
  }
}

init();
