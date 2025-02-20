Running tests

1. npx playwright test                             : runs all tests on all browsers in headless mode
2. npx playwright test --workers 3                 : runs with 3 workers in parallel
3. npx playwright test one.spec.js                 : runs a specific test file
4. npx playwright test one.spec.js two.spec.js     : runs the file specified
5. npx playwright test one two                     : runs files that have "one" or "two" in the filename
6. npx playwright test -g "check title"            : runs test with the title
7. npx playwright test --project=chromium          : runs on specific browser
8. npx playwright test --headed                    : runs tests in headed mode
9. npx playwright test --debug                     : debug tests ; npx playwright test --project=chromium --debug (by default runs in headed mode)
10. npx playwright test examp.spec.js --debug      : debug specific test file
11. npx playwright test examp.spec.js:21 --debug   : debug starting from specific line where test(..) starts

npx playwright codegen

1. npx playwright codegen --browser firefox                       : record on a specific browser(default: chromium)
2. npx playwright codegen --target javascript -o record_example.js: record and save to a file
3. npx playwright codegen --viewport-size=800,600                 : set viewport - screen resolution(size)
4. npx playwright codegen --device="iPhone11"                     : emulate devices
5. npx playwright codegen --color-scheme=dark                     : emulate color scheme (if available on the website)
6. npx playwright codegen --help                                  : see all options
