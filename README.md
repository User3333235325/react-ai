# Starter React App

This is a starter React application built with Typescript and Firebase Authentication.

## Features

- User Authentication: Users can sign up, log in, and log out.

## Setup

1. Clone the repository
2. Install the dependencies by running `npm install`
3. Create a `.env` file in the root directory and add your Firebase configuration:

```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

4. Run the app in the development mode by running `npm start`

## File Structure

- `src/index.tsx`: Entry point of the application
- `src/App.tsx`: Main component of the application
- `src/components/Login.tsx`: Login component
- `src/components/Signup.tsx`: Signup component
- `src/components/Dashboard.tsx`: Dashboard component
- `src/services/firebase.ts`: Firebase configuration
- `src/services/auth.ts`: Authentication service
- `src/types/index.ts`: Typescript types
- `src/styles/index.css`: Global styles
- `src/styles/Login.css`: Styles for the Login component
- `src/styles/Signup.css`: Styles for the Signup component
- `src/styles/Dashboard.css`: Styles for the Dashboard component

## Dependencies

- React
- ReactDOM
- Firebase
- Firebase Authentication
- Typescript
- CSS

## Scripts

- `npm start`: Runs the app in the development mode
- `npm test`: Launches the test runner in the interactive watch mode
- `npm run build`: Builds the app for production to the `build` folder

## License

MIT