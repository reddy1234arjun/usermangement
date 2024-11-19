User Management App

This project is a simple React-based application for managing users. It includes functionalities to add, edit, and delete users, with email validation to prevent duplicate entries.

Features
Add User: Adds a new user with a first name, last name, email, and department.
Edit User: Edit an existing user's details.
Delete User: Delete a user from the list.
Email Validation: Prevents duplicate emails from being added.
Prerequisites
Before you begin, make sure you have the following installed:


1. Clone the repository
First, clone the repository to your local machine:

git clone https://github.com/your-username/user-management-app.git
cd user-management-app

2. Install Dependencies
Install the required dependencies using npm (Node.js package manager). In the project directory, run:


npm install
This will install the following dependencies:

react: The core React library for building UI components.
react-dom: Provides DOM-specific methods for React.
react-scripts: A set of scripts for bootstrapping and running a React app.
prop-types: Optional, for type-checking props passed to React components (if you plan to add that functionality).
3. Run the Development Server
Once the dependencies are installed, you can start the development server:

npm start
This will start the app and automatically open it in your default web browser, typically at http://localhost:3000.

4. Open the App
The app should now be running on http://localhost:3000. You can interact with the User List, add new users, edit existing ones, and delete users.

Project Structure
Here's a basic overview of the file structure:


user-management-app/
│
├── public/
│   └── index.html          # HTML file where the app is injected
├── src/
│   ├── components/
│   │   ├── UserForm.js      # Form component for adding/editing users
│   │   └── UserList.js      # Table component displaying the user list
│   ├── App.js               # Main component, renders UserList and UserForm
│   ├── index.js             # Entry point for React
│   └── styles/
│       └── App.css          # CSS file with styling for components
├── package.json             # Project configuration and dependencies
├── README.md                # Project documentation (this file)
└── node_modules/            # Directory where npm modules are stored

The UserForm component handles the user input form for adding or editing users. It validates input fields and ensures that the email entered is not already taken.

Key Props:
user (Optional): If editing a user, this prop contains the existing user details to populate the form.
onSave: A callback function to save the user data (either adding or updating).
onCancel: A callback function to close the form without saving changes.
UserList
The UserList component renders the list of users and provides buttons to edit or delete users. It also handles adding new users by toggling the form visibility.

Key Props:
users: An array of user objects to display in the table.
onEdit: A callback function that is triggered when editing a user.
onDelete: A callback function that is triggered when deleting a user.
onAddUser: A callback function to add a new user.
editingUser: If editing, this prop contains the details of the user to be edited.
Error Handling
Duplicate Email Check: When trying to add a new user, the app checks if the email already exists in the user list. If it does, an error message is displayed.
Input Validation: The form validates that the first name, last name, and department fields only contain alphabetic characters and spaces.
CSS Styling
The application includes basic styling for the user form and user list:

.user-form for styling the form.
.user-table for styling the table.
.error-message for displaying error messages related to duplicate email addresses.
You can modify the App.css file to change the appearance as needed.

Customization
User Data: Currently, user data is passed via props to components. For a full-fledged app, consider connecting to a backend API (e.g., using Express and MongoDB, or a REST API).
Form Validation: The form validation is simple and checks for valid characters in the fields. You can extend this with more complex validation if required.
Notes
Make sure to update the onEdit, onDelete, and onAddUser methods with the actual data management logic (e.g., updating state, making API calls).
You can also extend the project by adding a backend service to store users in a database.
