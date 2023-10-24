
# CLI README Generator
Using Node.js, this application dynamically generates a README.md file based on user input. The user is prompted with a series of questions about their project using *Inquirer*, and the answers are used to populate the README.md file. The README.md file is then created and stored in the "generatedReadMe" folder. The User Story and Acceptance Criteria are below.

###User Story
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

###Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

###Installation
To run the application, you must first install the required dependencies. To do this, navigate to the root directory of the application and run the following command: ```npm install```. This will install the required dependencies, including *Inquirer*. Then run ```node index.js``` to start the application.

Please see the ```generatedReadMe``` folder for an example of a generated README.md file.