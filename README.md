# `aniTrack`
<h1 align="center">aniTracker</h1>
aniTrack is a site that allows users to search for a variety of anime that they can add to their watchlist which is located in their user profile. Users will also be able to remove any anime from their watchlist. This will allow users to keep track of anime they are watching. 

# Features
- Sign up or log in to access anime search feature
- Click + Watchlist button to add an anime to your user profile
- Click on anime title within user profile to add comments about the anime

![aniTrack](/wireframes/aniTrack.png)

# User Story
- As a user, I want to be able to search for an anime and add it to my profiles wathclist so that I can keep track of all the animes I plan on watching.
- As a user, I want to be able to leave comments on an anime in my watchlist so that I can give my current opinion on whether I like the anime or not.
- As a user, I want to view more information on an anime so that I can decide if I want to add an anime to my watchlist.
(IN PROGRESS)
- As a user, I want to input the amount of episodes I have watched for a specific anime in my watchlist so that I can remember what episode I left off on if I ever drop the anime at some point.
- As a user, I want to choose my Top 10 Anime's to display on my profile so that other users can see what anime I'm into.
# `Wireframes`
<h2 align="center">Data/Models</h2>

![data tables & models](/wireframes/data.png)

<h2 align="center">aniTracker Home</h2>

![aniTrakcer Home](/wireframes/anitrackwf.png)

## 'Installation Instructions'

1. Git Clone Repository
- git clone paste-repo-url-here
2. Select file in terminal
- cd anime-tracker
3. Run npm install in terminal
- npm install
4. Create .env file
- touch .env
5. Within .env file add the following
- SECRET_SESSION=anything-you-want-goes-here
6. Create a database
- npm install sequelize-cl
- npx sequelize-cli db:create anitrack
8. Migrate database
- npx sequelize-cli db:migrate
9. Start server by running one of the following in terminal
- nodemon (only if nodemon is installed on your machine)
- npm start