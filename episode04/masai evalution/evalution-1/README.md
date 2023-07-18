## React-Online-Mock-Exam

### Submission Instructions [Please note]

#### Maximum Marks - 16

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work.
- Do not push node_modules and package-lock.json to github.

```
✅ Able to submit the app - 1 mark ( minimum score )
✅ Heading and button to start the exam should be visible when the component loads - 1 mark
✅ Should make a get request to the endpoint when clicked on Start Exam button and disappear on UI once clicked on it and End Exam button, Score(Score: 0) is visible - 2 marks
✅ Check all questions are visible along with 4 options - 2 marks
✅ Check whether able select the answer for any question and the score is getting updated only after selecting the correct ans -3 marks
✅ Check whether the user able to select only one answer, and all option buttons of that question are getting disabled after selecting it - 1 mark
✅ Check End Exam button is working as per the problem statement or not - 2 marks
✅ check after selecting option for any question, the correct option is having className as "bgGreen" and the wrong options are having className as "bgRed" - 3 marks
✅ There should be a show ans button on clicking it the ans should be visible for that question - 1 mark
```

### Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json

```
npm install --engine-strict

// run locally
npm run start
```

- the system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
  try to keep one submission at a time

## Problem Description

Design an online exam application using React that allows users to take a quiz. The user should be able to start and end the exam using dedicated buttons. Each question should be displayed with four options, and upon clicking the correct answer, marks should be visible in real-time.

When the user clicks on any option, the marks should be updated on real-time. And the `className` of the correct option should be changed to `bgGreen` and other wrong options should have className `bgRed`. The user should be able to click on only one option per question.

## Folder Structure

```
├── src
|  ├── App.css
|  ├── App.jsx
|  ├── Components
|  |  ├── Booklet.jsx
|  |  ├── Option.jsx
|  |  └── QuestionCard.jsx
```



[Demo App Link](https://i.imgur.com/plz2L4f.gif)

### App.jsx

This component will be responsible for rendering the `Booklet` component. The App component should import the `Booklet` component and include it inside a `<div>` element with a class name of "App".

- Initial Display
<div style="width:85%;margin:auto">
<img src="https://i.imgur.com/m8VCESc.png" width="100%"/>
</div>

### Booklet(Components/Booklet.jsx)

`Booklet` component in Booklet.jsx contains `div` with `data-testid="Booklet"`, Inside this `div`, create a div as below.

- **`div` should be with `className="welcome-div"`**
  - This should contain a welcome message in `h1` tag with textContent `To begin the exam, click on the 'Start Exam' button below`
  - There should also be a `button` with textContent `Start Exam`

## On Click of the `Start Exam` button

On clicking the `Start Exam` button, the application should make a GET request to the API and display all the questions in cards using the `QuestionCard` component.

The API request is made to the following URL:

## API LINK:- https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz

- Use Fetch only

- After getting the data
  - `div` with `className="welcome-div"` should not exist on `DOM`.
  - The div with `className="questions-container"` should also contain the following HTML elements
    - `h3` tag with textContent `Score: {score}`, the score by default will be `0`
    - button with textContent `End Exam` on Clicking it, we should see only `div` with `className="welcome-div"` existing on DOM and `div` with `className="questions-container"` should not exist on DOM. (We have ended the exam here, so when we again start the exam by clicking on `Start Exam`, the score should be 0, and the user should be able to answer the questions from the start)
    - The questions should be visible on the DOM with the help of the `QuestionCard` component. And all the `QuestionCard` components should be appended inside the `div` with `className="questions-container"` provided. The div with `className="questions-container"` is already provided to you in `Booklet.jsx`.

- Note:- This `div` with `className="questions-container"` should exist on DOM only when the user starts the exam(After clicking on `Start Exam` button). And it should not exist on DOM when the user stops the exam(After clicking on `End Exam` button).

<div>
<img src="https://i.imgur.com/kmsF0Uh.png" alt="questions">
</div>

# QuestionCard(Components/QuestionCard.jsx)

<div>
<img src="https://i.imgur.com/AdJooKa.png" width="100%">
</div>

The `QuestionCard` component should contain the following HTML elements and should be used for displaying the `question` along with 4 options.
- create `h3` tag to display the question. (The textContent of this tag will be the question)
- `div` with `className="options"`.(provided in boilerplate)
  - All the options should be appended to the above div with the help of `Option` component.
- Create a div with `className="show-ans"`(provided in boilerplate)
  - This div should contain a button with textContent as `Show Ans` by default and on clicking it, the button textContent should be changed to `Hide Ans` and a `p` tag with textContent as correct ans of that question should exist on DOM. By default this `p` tag should not exist on DOM, it should be visible only when we click on the button `Show Ans` and on Clicking on the button(`Hide Ans`) again, the `p` tag should not exist on DOM.

<div>
<img src="https://i.imgur.com/axqD87B.png" width="100%">
</div>
Markup for reference
<img src="https://i.imgur.com/sQPU18O.png" width="100%">
</div>

**Functionality required**.

- The user should be able to click only one option per question. And on clicking it,
  - If he clicks on the `correct option` the score should be increased by `1` mark.
  - correct answer option for that question should have `className` as `bgGreen` and the wrong options should have className as `bgRed`.(<b style="color:green">This className should get assigned after selecting any option of that question. </b>)
  - Hint:- You can prevent the user from clicking on different options for a single question by using the disabled attribute for option buttons. For bgRed and bgGreen we gave css in App.css, so focus on how classNames can be assigned after selecting any option(Here options is a buttons).
<div>
<img src="https://i.imgur.com/NG9lf8I.png" width="100%">
<hr/>


# Option(Components/Option.jsx)

This component will be responsible for displaying the option. And there is a `div` with `data-testid="option"` provided in the boilerplate.

- You need to create a `button` with textContent as an option of that question.

<div>
<img src="https://i.imgur.com/O7dT2DU.png" width="100%">
</div>

#### The problem is tested on CP
![https://i.imgur.com/rRIW5FN.png](https://i.imgur.com/1SufEDP.png)

#### **Note**

- Make sure you use only the given components and don't create new Components, files, or folders of your own. Changing the component name, and file/folder structures might result in giving you zero marks
- Do Not Remove `data-cy="xxxx"` from anywhere, these are used by testing tools to test your code, and removal of this will lead to low scores.
- Also make sure to cross-check all the spellings and Cases of Texts.

### General Guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time
