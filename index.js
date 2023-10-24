// Requiring necessary packages
let fs = require ( 'fs' );
let inquirer = require (`inquirer`);


// License function and switch/case section here 
function getLicense(value) {
  switch (value) {
      case "GNU AGPLv3":
          return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
      case "GNU GPLv3":
          return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      case "GNU LGPLv3":
          return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
      case "Apache 2.0":
          return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      case "Boost Software 1.0":
          return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      case "MIT":
          return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      default:
          return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  }
}

// Creating the questions to be asked using Inquirer
inquirer
  .prompt([
    {
      // Title of Project
      type: `input`,
      message: `What is the title of your project?`,
      name: `title`
    },
    {
      // Description of Project
      type: `input`,
      message: `Please give a description of your project:`,
      name: `description`
    },
    {
      //Installation Instructions
      type: `input`,
      message: `Please provide instructions for installation:`,
      name: `installation`
    },
    {
      //Usage Instructions
      type: `input`,
      message: `Please provide usage information for your project:`,
      name: `usage`
    },
    {
      //Contribution Guidelines
      type: `input`,
      message: `Please provide contribution guidelines for your project:`,
      name: `contribution`
    },
    {
      //Testing Guidelines
      type: `input`,
      message: `Please provide testing protocol for your project:`,
      name: `test`
    },
    {
      //License Selction
      type: "list",
      message: "Please select a license for this project:",
      choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Apache 2.0",
            "Boost Software 1.0",
            "MIT",
            "Mozilla",
        ],
      name: "license",
    },
    {
      //Github Username
      type: `input`,
      message: `What is your Github username?`,
      name: `ghusername`
    },
    {
      //Github Email
      type: `input`,
      message: `What is your Github email?`,
      name: `ghemail`
    }
  ])
.then((response) => {
  //Creating the README file
  fs.writeFileSync('./generatedReadme/README.md', 
  `
  # Project Title
  ${response.title}
  ${getLicense(response.license)}
  
  # Description
  ${response.description}
  
  # Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
      
  # Installation
  ${response.installation}
  
  # Usage
  ${response.usage}
  
  # License 
  ${response.license}
  
  # Contributing 
  ${response.contribution}
  
  # Tests
  ${response.test}
  
  # Questions
  * GitHub Username: [${response.ghusername}](https://www.github.com/${response.ghusername})
  * Contact Email: ${response.ghemail}
  `
  )});