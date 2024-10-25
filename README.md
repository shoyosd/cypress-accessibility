# Cypress Accessibility Testing Project

This project leverages Cypress and the `cypress-axe` library to conduct automated accessibility testing on web pages, ensuring that they adhere to best practices and meet industry accessibility standards.

## Table of Contents
- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Viewing Test Results](#viewing-test-results)
- [Project Structure](#project-structure)
- [License](#license)

## Introduction

Accessibility is an essential component of modern web applications, allowing people of all abilities to access and interact with digital content. This project integrates the `cypress-axe` library with Cypress, enabling automated accessibility checks based on the Axe-core accessibility rules.

## Getting Started

To run this project, ensure that you have the following installed:
- [Node.js](https://nodejs.org/)
- [Cypress](https://www.cypress.io/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/cypress-accessibility-testing.git
   cd cypress-accessibility-testing
   ```

2. Install the project dependencies:

   ```bash
   npm install
   ```

## Usage

1.  Open Cypress:

   ```bash
   npx cypress open
   ```

2. Run the tests in your preferred environment.

    The accessibility tests will visit the specified pages and inject Axe to perform a detailed audit.


## Viewing Test Results

    Accessibility test results can be viewed directly in the Cypress Test Runner. Each test will report any accessibility violations found, including information on the type of violation, the affected elements, and suggestions for fixing each issue.

    To run the tests in headless mode, use:

   ```bash
   npx cypress run
   ```

## Example Code

    Accessibility test results can be viewed directly in the Cypress Test Runner. Each test will report any accessibility violations found, including information on the type of violation, the affected elements, and suggestions for fixing each issue.

    To run the tests in headless mode, use:

   ```bash
    // Visit the mercadolibre page and perform accessibility checks
    cy.visit('https://www.mercadolibre.com.co/');
    cy.injectAxe();
    cy.checkA11y();
   ```

## License
    
    This project is licensed under the MIT License - see the LICENSE file for details.