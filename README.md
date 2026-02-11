# URL Shortener

A simple Node.js URL shortener service. This project allows users to shorten URLs and redirect to the original URL using a generated short code.

## Features

- Shorten long URLs
- Redirect using short codes
- MongoDB integration for storing URLs
- Modular code structure (controllers, models, routes, services, utils)

## Project Structure

```
app.js
package.json
server.js
config/
  db.js
controllers/
  urlController.js
models/
  urlModels.js
routes/
  urlRoutes.js
services/
  urlServices.js
utils/
  codeGenerator.js
```

## Setup

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd shortener
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure MongoDB connection in `config/db.js`.
4. Start the server:
   ```bash
   npm start
   ```

## Usage

- Send a POST request to `/api/shorten` with a URL to receive a shortened code.
- Access `/api/:code` to redirect to the original URL.

## Dependencies

- Express
- Mongoose

## License

MIT License
