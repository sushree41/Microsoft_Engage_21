Microsoft Engage '21

This web app is my version of collaboration app that helps to have group discussions and helps the team to be organised with the event planner.

Technology Stack
1. Frontend is implemented using React JS
2. Backend of the project is implemented using Node JS
3. MongoDB is used for NoSQL database
4. Socket.io is used for realtime communication
5. Git is used for version control

Folder structure
1. The server code is present in the server folder of the root directory
2. The front-end of the project is present inside the client directory

Features and functionalities
1. Login with email and password
2. Discussion forum to send text, upload images and video
3. Event scheduling on calendar

Login with email and password
- User login information is stored in MongoDB database
- The password is hashed first and then stored
- The calendar after successful login will be an empty one

Discussion forum
- The user can send text,images and video in the discussion forum
- The messages are stored in the database
- All the users who have logged in have access to the discussion forum
- The realtime chat was implemented using socket.io

Event planner on calendar
- The user can add events to the calendar in the event planner section and clicking the add event button
- The user has to set the name of the event, start and the end time.
- The events are stored in the database

Steps to run the app on local system
1. clone the repository 
2. The MongoDB URL is in the dev.js file in config folder of server
3. Type  " npm install " inside the root directory  ( Download Server Dependencies ) 
4. Type " npm install " inside the client directory ( Download Front-end Dependencies )
5. "cd server" (move to server directory)
6. Type "npm run dev" (in server directory)



