# Reading Club Booking App

The Reading Club Booking App is a web application designed for readers who love to engage in book clubs and literary events. It provides a platform for users to discover reading clubs, book discussions, and author events in their area, make bookings, and manage their reading club memberships.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Features

User Registration: Users can create a new account by providing their first name, last name, email, and password. Upon successful registration, users can log in to access the app's features.

User Login: Registered users can log in to their accounts using their email and password. The login process verifies the user's credentials and grants access to the app's functionality.

Book Club Listings: The app displays a list of available book clubs, including information about the club name, genre, location, and upcoming events. Users can explore various book clubs and find ones that match their interests.

Event Booking: Users can select an upcoming book club event or author event and book their attendance. They can choose the event, provide their availability, and reserve a spot. The app ensures that the event capacity is not exceeded.

Reading Club Membership: Users can join existing book clubs and become members. Membership allows users to participate in book discussions, access club resources, and receive updates about club activities.

User Dashboard: Users have a personalized dashboard that displays their upcoming booked events, active reading club memberships, and recommended book suggestions based on their reading preferences.

Notifications: The app sends notifications to users about upcoming events, changes in event schedules, and new book club recommendations based on their interests.

# Technologies Used

Front-end: The front-end of the Reading Club Booking App is developed using React.js, a popular JavaScript library for building user interfaces. It leverages modern web development techniques such as component-based architecture, state management, and responsive design.

Back-end: The back-end of the app is built with Node.js and Express.js, providing a scalable server-side architecture. It handles user authentication, manages bookings and memberships, and communicates with the database.

Database: MongoDB is used as the database to store user information, book club details, event schedules, and user bookings. The database allows efficient querying and retrieval of information.

Authentication: User authentication is implemented using JSON Web Tokens (JWT). Upon successful login, users receive a token that is used to authenticate and authorize access to protected routes and user-specific data.

API Communication: The front-end communicates with the back-end API using Axios, an HTTP client library. It facilitates data exchange between the client and server, allowing seamless integration of app features.

# Setup and Installation

Clone the repository from GitHub.

Install the required dependencies by running the command npm install in the root directory.

Set up the environment variables by creating a .env file in the root directory and providing the necessary configuration values, such as MongoDB connection URI and JWT secret.

Start the development server by running npm start in the root directory. The front-end will be accessible at http://localhost:3000, and the back-end API endpoints will be available at http://localhost:8001.

Ensure that you have MongoDB installed and running locally or provide the appropriate MongoDB connection URI in the .env file to connect to a remote database.

Access the Reading Club Booking App in your web browser and explore the available book clubs, events, and make bookings.

# License

This project is licensed under the MIT License.

# Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please submit an issue or a pull request.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
