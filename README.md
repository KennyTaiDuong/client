# Real-Time-Search Challenge

## Challenge: Real-time Search and Edit Interface

## Objective: Build a React application that provides a real-time search interface for user data with the ability to edit and immediately view the changes.

### Core Requirements:

#### Data Fetching and Display:

Fetch user data from a public API (e.g., https://jsonplaceholder.typicode.com/users) on initial load.
Display the data in a list or card layout with key information visible (Name, Email, Username).

#### Real-time Search:

Implement a search feature that filters the displayed user cards as the user types into the search input. The search should filter by name and email.

#### Inline Editing:

Clicking on a user card allows inline editing of the Name and Email fields.
Changes should be immediately reflected in the UI upon confirmation of the edit (no actual API update is needed).

#### Performance Optimization:

Ensure that the search and editing functionalities are optimized and do not cause unnecessary re-renders.

#### State Management:

Use React Hooks (useState, useEffect) for local state management.
The application state should reflect the current search term and the list of users, including any edits.

### Bonus Challenges:

#### Debounced Search:

Implement debouncing for the search input to reduce the number of state updates while typing.

#### Undo Functionality:

Add the ability to undo the last edit made to any user's information.

#### Custom Hook:

Create a custom hook for handling the user data that encapsulates all logic for fetching, searching, and editing.

#### Deliverables:

A GitHub repository link to your project code.
Instructions in the README on how to run the application.
(Optional) A deployed version of the application on a platform like CodeSandbox for immediate review.

### App Usage:

#### Search for user:

Use the search bar located at the top find users that match your query.

### Edit User Name/Email:

Click on the name or email input in the user card to edit the user's name. Click confirm edit to update the name locally or cancel changes to undo the most recent changes.
