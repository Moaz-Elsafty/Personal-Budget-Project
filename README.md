# personal-budget

Simple Node/Express API to manage a portfolio budget using a budget envelope strategy. Users can create, read, update, and delete envelopes.

## Running the app
To run locally, run `npm install`, then `npm run start`

Once the app is running locally, you can access the API at `http://localhost:3000/`

## Testing with Postman
Swagger documentation and testing available at `http://localhost:3000/api/envelopes/`

To test with Swagger:
 - Retrieve envelopes using `GET /api/envelopes`
 - Retrieve a single envelope using `GET /api/envelopes/{envelopeCategory}`
 - Create an envelope using `POST /api/envelopes/{Query String}`
 - Update an envelope using `PUT /api/envelope/{envelopeCategory}/{Query String}`
 - Delete an envelope using `DELETE /api/envelope/{envelopeCategory}`
 - Transfer money between envelopes using `POST /api/envelope/transfer/{fromId}/{toId}`

 ## Options for extension
 - Create a frontend that displays envelopes and balances, and allows users to update each envelop balance
 - Add an API endpoint allowing user to add a single balance that’s distributed to multiple envelopes
