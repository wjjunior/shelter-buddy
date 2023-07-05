# Shelter Buddy dashboard app - Code Test

Welcome to the ShelterBuddy frontend developer code test.
Your goal is to replicate the dashboard page found at: [https://shelterbuddy.vercel.app/](https://shelterbuddy.vercel.app/). producing code that is suitable for a production release.

## Requirements:

1. As a shelter worker I want to see a list of all the animals at my shelter so that I can get an overview of animals being sheltered.

2. As a shelter worker I want to be able to search the animals at my shelter by name so that I can quickly find the desired animal.

3. As a shelter worker I want to see a count of the number of animals currently displayed in my list.

### Bonus Points:

- Mobile friendly

## Implementation Details

Feel free to implement your own way of fetching data, you can either use Fetch API, Relay, or some other solution.

Use the following link to access the playground to see the endpoint schema: [Playground](https://akjgi8mbsd.execute-api.ap-southeast-2.amazonaws.com/Prod/graphql/)

The `animals` query is using the cursor based pagination, so to help you to create the page numbers, there is a function in `src/utils/utils.ts` to generate the cursor based on the page number.

### How to use the playground

On the initial page, click on "Browser schema", then on the "Connection Settings" panel click on "Apply". On the "Operations" tab you can test the `animals` query. On the "Schema Reference" tab you can see the schema types.

## Available Scripts

In the project directory, you can run:

### `npm install`

Install the dependencies listed on `package.json` file

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
