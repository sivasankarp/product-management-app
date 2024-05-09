# To run the React App on our local machine

# Step 1: Clone the Git Repository

1. Open your terminal (Command Prompt on Windows or Terminal on macOS/Linux).
2. Navigate to the directory where you want to clone the repository:

### `cd /path/to/destination/directory`

3. Clone the Git repository:

### `git clone https://github.com/sivasankarp/product-management-app.git`

# Step 2: Install Dependencies

1. Navigate to the cloned repository directory:

### `cd product-management-app`

2. Install project dependencies using npm (Node Package Manager):

### `npm install`

# Step 3: Run the React Application

1. Start the React development server:

### `npm start`

2. Open a web browser and navigate to http://localhost:3000 to view the running React application.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
our app is ready to be deployed!

### `npm run eject`

Added the screenshots for more reference.


To create a docker container by running 

### `$ docker run -d -it –rm -p [host_port]:[container_port] –name [container_name] [image_id/image_tag] `


Verify whether the container has been created successfully by running
### `$ docker container ps `

