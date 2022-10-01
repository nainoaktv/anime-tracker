# `aniTrack`
<h1 align="center">aniTracker</h1>
aniTrack is a site that allows users to search for a variety of anime that they can add to their watchlist which is located in their user profile. Users will also be able to remove any anime from their watchlist. This will allow users to keep track of anime they are watching. 

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