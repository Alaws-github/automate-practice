# Tern Bicycles Automation Suite

## Environments
The various environments are defined in the `urls.js` file in the root directory

## Running it locally

### `npm install`

Installs the dependencies and creates the node modules folder.<br />

### Executing Tests

ENV=qa npm test - runs all tests/specs <br />

ENV=qa npm run home - runs tests in the specified suite. In this case, the home suite<br />

ENV=qa npm run support_guest - runs tests in the specified suite. In this case, the support guest suite<br />

### Generating Test Report

From the root of the project, run the following command: `npm run allure-reports` <br />

This generates and opens the allure report locally, displaying all test results that are currently in the `allure-results` directory. <br />

Alternatively you can use the command `allure generate --clean && allure open` to achieve the same outcome in the event of directory issues.<br/>

Results from the report can also be downloaded as a csv file while in the allure interface for export and sharing.

## Adding a New Suite

*Update the `suites` property in the `wdio.conf.js` file to include the tests/specs that should be included in your new suite.<br/>
    *Eg: `bike: ['./test/specs/bike/*.js'] ` would be added for a suite with the name bike.<br/><br/>
*Update the `scripts` property in the `package.json` file to include the new suite.<br />
    *Eg: `"bike": "./node_modules/.bin/wdio wdio.conf.js --suite bike"` would be added for a suite with the name bike.<br/>


## Executing Data Driven Suites

Both the permissions and support suites are executed against areas of the site that require some human input. The automation suite relies on the data pulled from the Data directory, currently the data files are; `login.data.js, permission.data.js and support.data.js`. These files contain standard data for completing the test processes and can be modified for changing test rigidity or assessing the input boundaries. </br>

Should new features be added that require user input; create a data file in the data directory or should they be related to the existing data files the information can be added in the respective files.

The distributor permissions suite also manipulates bike andaccessory pages. It accepts the name of each page type that it should execute the tests on. In the permissions data directory bikeTitle and accessoryTitle are preset to the bike accessory pages respectively that has been used pre-launch. Should they remain you may need to recreate the pages with the respective names/titles or alternatively change the values in the data file to existing pages of your choosing.


## Handling Site Changes

Following any site updates introducing new features or minor fixes it is good to execute the automation suite for any regression that may have occurred. While the automation suite does not cover every area of the site it will be faster testing longer processes for any issues.<br/>

Recommended areas for focus include support and permissions. Specifically executing the support-guest suite and permissions-distributor suite. Should there be new issues regarding these aspects of the site is likely to be discovered by those test cases. Following any error discovery then the rest of the test suite should be executed for good measure.


## Test Maintenance & Management

Generally the test cases should be maintained alongside the site for any changes to avoid breaking and giving false fails. Something to note includes changing selectors. Typically selectors less subject to change are used in the page elements but there are times when a change shall occur for some reason, in particular it has been noticed that the css selectors for the radio field on the support owner registration page are dynamically generated and has changed several times during deployments in the site upgrade period. As such those element's selectors have consistently changed, while this may not be the case post go live it is still advised to be cognizant of such possibilities. 
These changes are usually indicated by errors stating that `Can't call <function> on element with selector <selector> because element wasn't found`. <br/>

## Best Practices

When using the automation suite independently there are few things to consider. <br/>

***Exceution***

For a general confidence test executing the entire suite at once is appropriate but when assessing an issue it is better to execute the suites individually. This allows for easier error tracking and allows you the ability to visually follow the flow of the test as it is occuring,in which you can see exactly where a case begins to fail, typically there is a pause in execution or you may able to briefly see some error on the page. <br/>

***Test Inpsection***

If during test execution you would like the execution to be paused to inspect a page for some reason this can be done using pauses. Simply putting a browser pause where necessary will halt the exection for your desired amount of time. For e.g. `browser.pause(5000)` will pause exectuion for 5 seconds. This is usually helpful when you want to observe some element behaviour or result of a line of code before the test completes in full.<br/>

***Skipping Tests***

There may be times in executing a test suite when you no longer need the entire suite to be executed because you are focused on a specific test case. For e.g a specific case has failed and it is not dependent on other cases in the suite. In this instance it would be more time efficient to skip the tests that have passed and only execute the test of focus. Here we can use `x` or `skip` to skip test cases. This is written as 
`xit` or `it.skip`.
