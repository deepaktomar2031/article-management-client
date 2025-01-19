# article-management-client

## Tech Stack:
-  Frontend: React using TypeScript

# The idea of this project is to create a frontend for managing articles. The frontend should be able to:

-  Sign up new users
-  Login and logout users

-  View a list of all authors
-  View an author by ID

-  Create a new article
-  View a list of all articles
-  View an article by ID
-  Mark/unmark articles as favorites

-  Create a new comment on an article
-  View all comments on an article
-  View a comment by ID


# Required ENV's
- REACT_APP_ARTICLE_MANAGEMENT_API_BASE_URL=http://localhost:3000/api


# Run Project Locally
-  clone the project


# To install dependencies
-  `yarn install`


# To run project in development mode
-  `yarn start`
-  Open [http://localhost:8000] to view it in the browser


# To build project
-  `yarn build`
-  `cd build`
-  Run live server or any other server to serve the build folder
-  Open [http://localhost:8080] to view it in the browser


-  By default we've 2 already created users:

# Admin
email: admin@gmail.com
password: admin

# Author
email: user1@gmail.com
password: pass1


# Project Structure
-  src/
   -  components/
      -  Common/ - common components
      -  Article/ - article components
      -  Author/ - author components
      -  Comment/ - comment components
      -  Authentication/ - authentication components
      -  Toast/ - toast components
   -  services/ - services for making API calls
   -  pages/ - all pages of the project
   -  types/ - has all types/interfaces used through out the project
   -  utils/ - has common functionality used through out the project (constants, error handler etc..)
   -  assets/ - has all static assets like css etc..
   -  App.tsx - entry point of the project