const licenseNameMIT = 'MIT';
const licenseNameApache = 'APACHE 2.0';
const licenseNameGNU = 'GNU GPL 3';

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // choices: ["MIT", "APACHE 2.0", "GPL v3", "none"],
  if (license == licenseNameMIT) {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  else if (license == licenseNameApache) {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  if (license == licenseNameGNU) {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }
  else {
    return '';
  }
}

// The function returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //["MIT", "APACHE 2.0", "GPL 3.0", "none"]
  if (license == licenseNameMIT) {
    return "./utils/MIT-license.txt";
  }
  else if (license == licenseNameApache) {
    //https://www.apache.org/licenses/LICENSE-2.0.txt
    return './utils/Apache-license.txt';
  }
  else if (license == licenseNameGNU) {
    //https://choosealicense.com/licenses/gpl-3.0/
    return './utils/GNUv3-license.txt';
  }
  else {
    return '';
  }
}

// This function returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(fn) {
  var myContent;
  if (fn.length > 0)
  {
    const fs = require('fs');
    myContent = fs.readFileSync(fn, 'utf8');
  }
  return myContent;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let badge = renderLicenseBadge(data.license);
  const fn = renderLicenseLink(data.license);
  let licenseText = renderLicenseSection(fn);
  let installText = "```" + data.installDepends + "```";
  let testText = "```" + data.testsCommand + "```";
  return `
# ${data.project}
${badge}
## Description
${data.description}
## Table of Contents
[Installation](#installation)<br>
[Link to GitHub repository](#link-to-github-repository)<br>
[Usage](#usage)<br>
[Contributing](#contributing)<br>
[Tests](#tests)<br>
[Questions](#questions)<br>
[License](#license)
## Installation
${installText}
## Link to GitHub repository
https://github.com/minprocess
## Usage
${data.using}<br>
Example using this program<br><br>
![screenshot of the questions and answers](${'screenshot.png'})<br><br>
## Contributing
${data.contributing}
## Tests
${testText}
## Questions
If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at GitHub username ${data.username}.
## License
${licenseText}
`;
}

module.exports = generateMarkdown;
