# Challenge-03 JavaScript: Password Generator

## Your Task

This week's Challenge was to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. This app runs in the browser and features dynamically updated HTML and CSS powered by JavaScript code. It has a clean and polished, responsive user interface that adapts to multiple screen sizes.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Application

The following image shows the web application's appearance and functionality:

![The Password Generator application displays a red button to "Generate Password".](assets\imgs\new.png)

## Changes Made

-Create prompts that triggers on click event of generate button

-Collect and store user input, convert to upperCase string

-Create generatePassword function which collects user input, then creating a password that matches the criteria

-Created/edited writePassword function which references generatePassword function

-Created/edited a functional button that triggers writePassword and generatePassword functions

-Created detailed ReadMe that includes final results image and documents changes


- - -
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

image.png