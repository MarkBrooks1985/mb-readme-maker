// renders the license badge
function renderLicenseBadge(license, link) {
  if (license === "No License") return "";
  const badge = `![License](https://img.shields.io/badge/License-${license}-yellow.svg)`;
  return renderLink(badge, link);
}

// renders the license link
function renderLink(content, link) {
  return `[${content}](${link})`;
}

// renders the license section
function renderLicenseSection(license, link) {
  return `This project uses ${renderLink(license, link)} license`;
}

// get the link for the license
function getLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";

    case "GPLv3":
      return "https://opensource.org/licenses/GPL-3.0";

    case "GPL":
      return "https://opensource.org/licenses/gpl-license";

    default:
      return "";
  }
}

// renders the install section
function renderInstall(code) {
  return `To install this application run this following code
\`\`\`
${code}
\`\`\``;
}

// generates and renders the markdown
function generateMarkdown(data) {
  const licenseLink = getLicenseLink(data.license);
  return `# ${data.title}
${renderLicenseBadge(data.license, licenseLink)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${renderInstall(data.installation)}

## License
${renderLicenseSection(data.license, licenseLink)}

## Contributation
${data.contributing}

## Tests
${data.test}

## Questions
${data.question}

`;
}

module.exports = generateMarkdown;
