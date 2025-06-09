### Prerequisites

Before running the tests, make sure the testing form is running locally.

### Start the test form app
Follow the instructions in the repository below to run the form locally:
https://github.com/sparingsoftware/qa-form

### Run tests using Playwright

Once the app is running at localhost, you can run Playwright tests using the following commands:

    npx playwright test
    Runs all end-to-end tests.

    npx playwright test --ui
    Opens the Playwright test runner in interactive UI mode.

    npx playwright test --project=chromium
    Runs tests only in Chromium (Desktop Chrome).

    npx playwright test example
    Runs tests from a specific test file.

    npx playwright test --debug
    Runs tests in debug mode (useful for troubleshooting).
