
Save this content as `README.md` in the root directory of your project.
## File Descriptions

### Root Files

#### [index.js](index.js)
- Entry point of the application.
- Creates an HTTP server and starts listening on port `8000`.
- Imports the Express app from `app.js`.

#### [app.js](app.js)
- Configures the Express application.
- Sets up middleware for CORS, JSON parsing, and URL-encoded data.
- Connects to MongoDB using the `connectDB` function from `db/db.js`.
- Configures EJS as the view engine and sets the views directory.
- Defines routes for the application:
  - `/url` handled by `routes/url.js`.
  - `/` handled by `routes/staticRouter.js`.

#### [package.json](package.json)
- Contains project metadata and dependencies:
  - `express`, `mongoose`, `ejs`, `cors`, `shortid`, etc.
- Defines the `start` script to run the application.

#### [.gitignore](.gitignore)
- Specifies files and directories to be ignored by Git.

#### [README.md](README.md)
- Documentation for the project, including file descriptions and usage instructions.

---

### Controller

#### [controller/url.js](controller/url.js)
- Contains the logic for handling URL-related operations:
  - `handlegenerateUrl`: Creates a shortened URL and renders the home page with the updated list.
  - `getUrlAndUpadte`: Redirects to the original URL and updates the visit history.
  - `analytics`: Returns analytics data for a specific shortened URL.

---

### Database

#### [db/db.js](db/db.js)
- Contains the `connectDB` function to establish a connection to the MongoDB database.

---

### Model

#### [model/url.js](model/url.js)
- Defines the Mongoose schema and model for storing URL data.
- Fields:
  - `ShortId`: Unique identifier for the shortened URL.
  - `redirectUrl`: Original URL to redirect to.
  - `visitHistory`: Array of timestamps for tracking visits.

---

### Routes

#### [routes/url.js](routes/url.js)
- Defines API routes for URL-related operations:
  - `POST /`: Generates a shortened URL.
  - `GET /:ShortId`: Redirects to the original URL and updates visit history.
  - `GET /analytics/:ShortId`: Provides analytics for a specific shortened URL.

#### [routes/staticRouter.js](routes/staticRouter.js)
- Defines a route for rendering the home page.
- Fetches all URLs from the database and passes them to the `Home.ejs` template.

---

### Views

#### [views/Home.ejs](views/Home.ejs)
- EJS template for rendering the home page.
- Displays a form for generating shortened URLs and a table of existing URLs with their analytics.

---

## How to Run

1. Clone the repository.
2. Install dependencies:
   ```sh
   npm install