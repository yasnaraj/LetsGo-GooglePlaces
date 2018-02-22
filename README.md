## Lets Go (A Google Places API application)

This application makes use of Google API to show a random place to visit in USA based on their selection.

Once a user selects a generic thing they are interested in, the application:
- Fetches a list of places based on the selection they made
- Picks a random place from the selection
- Displays the place name
- Displays the direction to the randomly selected place from their current location or pin points the location in Google Maps
- Displays a list of images for reference of the randomly selected place

This Application makes use of the following Google API services:
- Place Search (Text Search Request)
- Place Details Request
- Place Photo Request

It also utilizes <a href="https://github.com/tomchentw/react-google-maps" target="_blank" > react-google-maps </a> to generate the Google Map to render direction or pin point the location.

#### Note: The api key for Google needs to be placed in /public/index.html: replace [GOOGLE-API-KEY] to your api key.