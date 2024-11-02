# Expense Tracker

This project is an Expense Tracker application built with [Create React App](https://github.com/facebook/create-react-app). It allows users to track their income, expenses, and view a balance summary, helping them to monitor and manage their finances more effectively.

## Features

- **Add Transactions**: Record income and expenses, including the date and category.
- **Track Balance**: View the current balance based on income and expenses.
- **View Income & Expenses Summary**: Get a breakdown of total income and expenses.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload if you make edits.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See more about [running tests](https://facebook.github.io/create-react-app/docs/running-tests).

### `npm run build`

Builds the app for production to the `build` folder.\
The build is optimized for performance and ready for deployment.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**\
This command removes the single build dependency from your project, giving you full control over configuration files and dependencies.

## Components

The app is divided into the following main components:

- **App.js**: The main container of the app, handling state management and rendering all components.
- **TransactionForm.js**: Allows users to add income or expense transactions.
- **TransactionList.js**: Displays a list of all transactions.
- **BalanceSummary.js**: Calculates and displays the current balance, total income, and total expenses.

## Technologies Used

- React (useState, useEffect hooks)
- Axios for API requests (if using an API for data persistence)
- CSS for styling

## Learn More

For more information on Create React App, check out the [documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, visit the [React documentation](https://reactjs.org/).

### Deployment

This section provides guidance on [deploying](https://facebook.github.io/create-react-app/docs/deployment) the app to various hosting platforms.

### Troubleshooting

For any build issues, refer to the [troubleshooting section](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) in the Create React App documentation. 
