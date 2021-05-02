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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //["MIT", "APACHE 2.0", "GPL 3.0", "none"]
  console.log("renderLicenseLink", license);
  if (license == licenseNameMIT) {
    return "<a href='./MIT-license.txt'</a>";
  }
  else if (license == licenseNameApache) {
    return './Apache-license.txt';
  }
  else if (license == licenseNameGNU) {
    // <a id="idUsage"></a>
    return './GNUv3-license.txt';
  }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //["MIT", "APACHE 2.0", "GPL 3.0", "none"]
  var text;
  if (license == licenseNameMIT) {
    return "<a href='./MIT-license.txt'</a>";
  }
  else if (license == licenseNameApache) {
    return 'Apache 2.0 license';
  }
  else if (license == licenseNameGNU) {
    return 'Gnu License 3.0';
  }
  else {
    return 'No license given';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let badge = renderLicenseBadge(data.license);
  let licenseText = renderLicenseSection(data.license);
  console.log(licenseText);
  let installText = "```" + data.installDepends + "```";
  let testText = "```" + data.testsCommand + "```";
  return `
  # ${data.project}<br>
  ${badge}<br>
  ## Description<br>
  ${data.description}<br>
  ## Table of Contents<br>
  [Installation](#idInstall)<br>
  [Usage](#idUsage)<br>
  [Contributing](#idContributing)<br>
  [Tests](#idTests)<br>
  [Questions](#idQuestions)<br>
  [License](#idLicense)<br>

  <a id="idInstall"></a>
  ## Installation<br>
  ${installText}<br>
 
  <a id="idUsage"></a>
  ## Usage<br>
  ${data.using}<br>
  <br>
  ![screenshot of the questions and answers](${'screenshot.png'})<br>

  <a id="idContributing"></a>
  ## Contributing
  ${data.contributing}

  <a id="idTests"></a>
  ## Tests
  ${testText}

  <a id="idQuestions"></a>
  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at GitHub username ${data.username}.

  <a id="idLicense"></a>
  ## License
  ${licenseText}
`;
}

module.exports = generateMarkdown;