Live coding practice interview question
=======================================

## Overview

This is a simple live coding challenge

## The "Rules"

You should attempt to complete this challenge without looking at any other resources such as googling, stack-overflow, documentation or course materials. However, you may look at any of the files in the project including the schema in the `models.js` file and the integration tests in `test/server.test.js` and you may ask the interviewer clarifying questions at any point.

### 3 Lifelines

- If you get stuck, you have 3 lifelines (like "Who Wants to Be a Millionaire")
  - 1) Online documentation - browse Express, Mongoose, Chai, Chai-Http docs
  - 2) Interview Hint - Ask the interviewer for a hint
  - 3) Google search - one time google search including stack-overflow and docs

## Setup

- Open the "Logs" in this project
- You should see output from the Mocha/Chai tests, some will be failing.

## Exercise

- In the `modules/calculator.js`, export an object whose properties are the functions `add`, `subtract`, `multiply`, `divide` using ES6 Object initialize shorthand.
- In the `app.js` require the calculator module. Using ES6 Object destructuring, declare `add`, `subtract`, `multiply`, `divide` and assign them the properties of the calculator module.

You have completed the task when all the unit tests pass.