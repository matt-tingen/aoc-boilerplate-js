# Advent of Code

This is a minimal starter kit for solving the [Advent of Code](http://adventofcode.com/) challenges in Node.js.

## Usage
To setup:
* Clone the project
* Install dependencies: `yarn` / `npm install`

For the daily challenge:
* Copy a previous day's folder
* Add any test cases the website provides
* Solve the puzzle
* Run the tests to verify your solution: `yarn test` / `npm test`
* Copy your test input from the website into `input.txt`
* Execute the puzzle script: `node 2017/1/partA.js`
* Paste your output in the website to check it

## Details

For each day, there's a `partA` file and a `partB` file corresponding to the two parts of the daily challenge. Since the two parts are related, it is recommended to put most of your solution in a separate file in that day's folder. The two parts can then easily share code.

There is also a test file for each puzzle which can be used to help check your work and determine when you're ready to submit an answer. Just run `yarn test` or `npm test` and all the tests will run.

When you think you've completed the puzzle, get your input from the Advent of Code website and paste it in `input.txt` for that day and run your solution file with e.g. `node 2017/1/partA.js` for the first puzzle of Dec 1st, 2017. The `main` function will handle passing in the input, logging the output to the terminal, as well as copying the output to your clipboard so you can paste it in the website.

You may find that you want to share code between challenges from different days. The `util` folder is a good place to put oft-used code such as a `sum` function or combinitorics.
