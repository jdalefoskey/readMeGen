// created required links
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// Promps user for questions, answers stored for retrieval
function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "projectName", // Link to stored answer
      message: "What is your project name ?",
    },
    {
      type: "input",
      name: "description", // Link to stored answer
      message: "Project description?",
    },
    {
      type: "input",
      name: "video", // Link to stored answer
      message: "location of screenshot or video ?",
    },
    {
      type: "input",
      name: "gettingStarted", // Link to stored answer
      message: "Enter instructions on how to deploy your site?",
    },
    {
      type: "input",
      name: "commanLine", // Link to stored answer
      message: "Enter command to start project",
    },
    {
      type: "input",
      name: "installation", // Link to stored answer
      message: "Instructions to deploy site",
    },
    {
      type: "input",
      name: "webpage", // Link to stored answer
      message: "Enter your webpage address.",
    },
    {
      type: "input",
      name: "linkedin", // Link to stored answer
      message: "Enter your LinkedIn URL.",
    },
    {
      type: "input",
      name: "twitter", // Link to stored answer
      message: "Enter your twitter handle.",
    },
    {
      type: "input",
      name: "email", // Link to stored answer
      message: "What is your email ?",
    },
  ]);
}
// generating readme.md document with contextual answers
function generateHTML(answers) {
  projectname = answers.projectName;
  console.log(answers.projectName);
  return `
  ![Alt text](https://res.cloudinary.com/practicaldev/image/fetch/s--7yVSltAE--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://user-images.githubusercontent.com/9840435/59461914-cbc18380-8e22-11e9-8567-87b43da950ac.png?raw=true "readme")
  ---
  
  # ${answers.projectName} 
  ---

  ## Description [![JavaScript Style Guide: Good Parts](https://img.shields.io/badge/code%20style-goodparts-brightgreen.svg?style=flat)](https://github.com/dwyl/goodparts "JavaScript The Good Parts")
  ---
  > ${answers.description}

  ![Alt text](/${answers.video}?raw=true "Screen Shot")
  


  ### Getting Started
  ---
  > ${answers.gettingStarted}


  ### Installation
  ---
  ```
  ${answers.installation}
  ```
  To launch the program, write the following in the terminal window:
  ```
  ${answers.commanLine}
  ```
  
  `;
}
// and here is where the magic all comes together, writes the file to disk,
// and confirms the file was created
async function init() {
  console.log("hi");
  try {
    const answers = await promptUser();

    const html = generateHTML(answers);

    await writeFileAsync("README.md", html);

    console.log("No sweat README.md is done!");
  } catch (err) {
    console.log(err);
  }
}
//  Here is where we kick everything off
init();
