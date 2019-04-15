###Backend
 - Users (our users)
 - Follows - joining class
 - Uploads/ submitted videos
 - Tutorials


###FrontEnd
nav bar for all screens

pass user id into Navbar so edit user link works
Set up Bootstrap with proper react version


### User stories
A user can login
A user can follow other users
And see followed users streams on home page.
See favorited vides on home page
A user can link to their videos that we can display


#User
Can signup - create
Can see account info of themselves and others - Show
Can edit info, link to twitch etc - Edit and Update
Can Delete account - Delete

On users show page display active video see videos with iframes
User can see sorted videos by category


Associations

##User

front end does fetch request to backend (local host)
back end does http request to Twitch
Twitch returns the data to the backend
back end sends that to front end as the response to the original fetch

### come back to
password validation- client side. repeat password etc
  if errors on initial signup throw an error and dont re direct.






###What I'm trying to do
Within navbar have username and password with Login and Signup buttons

On button to log in
  - fetch from backend and check if user is exists
  - if user exists change details to render on screen

On signup button
  - take details held in input fields and send fetch request to create a new user
  - render all stuff until they have some stuff favorited or added their own videos to display. 












.
