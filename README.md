# Automation Framework with Playwright and Cucumber

This repository contains automated tests for the Webshop scenario using Playwright with Cucumber.

## Scenario

### Webshop Scenario: Shipping Cost

#### Description:
The scenario tests the functionality related to shipping costs on the Webshop.

#### Steps:
1. **Given** the user is logged into the Webshop.
2. **When** the user orders a product in the shopping cart with the following details:
   - Product: Blue Jeans
   - Item Price: $1
   - Item Quantity: 25
   - Card Number: 1234567890
3. **And** the user completes the checkout process with the following parameters:
   - Cardholder Name: Goku
   - Card Number: 1234567890
   - Expiration Month: 10
   - Expiration Year: 2030
   - Card Code: 123
4. **Then** the price is added correctly.
5. **And** the success message is displayed correctly.

## Setup

### Prerequisites:
- Node.js (https://nodejs.org/)
- Playwright (https://playwright.dev/)

### Installation:
1. Clone this repository to your local machine.
2. Run `npm install` to install the required dependencies.

## Running the Tests

### Using Playwright Test Runner:
To run the tests using Playwright test runner, use the following command:

```bash
npx playwright test
npx cucumber-js
```
## Contributors 

[Neyffer Antonio Palacios Tello](https://github.com/TonioTello) 

This README.md file provides a basic overview of the Automation Framework with Playwright and Cucumber, including the scenario description, setup instructions, and commands for running the tests.

