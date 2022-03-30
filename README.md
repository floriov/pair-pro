
# Pair Pro

I came up with the idea of Pair Pro for my final bootcam group project. Pair Pro is a platform that lets software engineers find other software engineers to pair program together. 

## Demo

Heroku URL: https://pairpro22.herokuapp.com/ <br>
YouTube: https://youtu.be/Q_7bCU3Mp88

## Techonologies Used

MERN Stack <br>
MongoDb <br>
Express js <br>
React js <br>
Node js <br>

Testing:<br>
Cypress<br>
React Testing Library<br>

Workflow:<br>
Github Actions (CI/CD)<br>


## Initial setup

First, clone this repository. 

Then:<br>
add .env file: <br>
NODE_ENV = DEVELOPMENT<br>
ATLAS_URI=mongodb+srv://katbrooks:<password>@cluster0.oasbh.mongodb.net/pairpro?retryWrites=true&w=majority<br>
PORT=5000<br>
JWT_SECRET = dreamteam1<br>
in the root directory run: ```yarn install```<br>
in the 'client' directory and run: ```yarn install```<br>
go back to root directory and run: ```yarn run dev```<br>


## User Stories
```
MVP USER STORIES
As a user,
So I can access the pair programming website,
I would like to sign up.
As a user, 
So my profile can be remembered,
I would like to sign in.
As a user,
So I can keep my profile safe,
I would like to sign out. 
As a user, 
So that I can see other programmers to pair with,
I would like to see a list of users.
As a user, 
So that other users can see whether they want to pair with me,
My profile will contain the technologies I use and my level of experience.
As a user,
So that others can decide whether they want to work for me, 
I can state on my profile the things I’d like to pair on e.g. katas/projects.
As a user,
So other users can see my past projects,
My profile will link to my GitHub.
As a user, 
So I can arrange a session with other members, 
I would like to be able message other members.

NICE TO HAVE USER STORIES
As a user, 
So I can find members with relevant interests,
I want to filter by language, level or location/remote.
As a user,
So the website feels a bit more personal, 
I want to have a profile picture.
As a user,
So the website feels less wordy and a bit more colourful to the eye,
I want to see the respective language icon next to each coding language

As a user
So I can stay connected with other members
I would like to add friends to my account
As a user, 
So I can message people in real-time, 
I would like a chat-feature.
As a user, 
So we can code directly on the website without having to open vscode, 
I would like vscode integration.
As a user, 
So I can arrange spontaneous pairing sessions, 
I would like to see who is online so that I can invite people to pair immediately and get notifications.
As a user,
So I can share my skills and see other people’s ‘skills’
I would like to endorse other members after pairing with them e.g. ‘is punctual’, ‘has good chat’
As a user, 
So I can directly pair program via a zoom from the website, 
I would like zoom integration on website.
As a user, 
So that I can have an easy sign-in process and automatically link my accounts, 
I would like the option to sign-up with github/linkedin.
As a user,
So that I can show that I have completed tasks,
I would like badges to be added to my profile
As a user, 
So I can get suggestions for katas to work on, 
I would like to see links to suggested/popular katas for my level/language.
```
