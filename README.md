# what time ish?

Created to give Kate a random time of the day during DND sessions. 

## Usage

Can be reached at [whattimeish.com](https://whattimeish.com/). Additional random times can be provided for different times of day:

- 5am-11:59am - [whattimeish.com/morning](https://whattimeish.com/morning)
- 12pm-4:59pm - [whattimeish.com/afternoon](https://whattimeish.com/afternoon)
- 5pm-9:59pm - [whattimeish.com/evening](https://whattimeish.com/evening)
- 10pm-4:59am - [whattimeish.com/night](https://whattimeish.com/night)




## Local Testing

`npm run start`

Runs the app in the development mode. \
Should automatically oepn in browser. \
If not, open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


## Deployment

`npm run build`

Builds the project for deployment.

`firebase deploy`

Exports the current build to production, as hosted on [Firebase](https://console.firebase.google.com/u/0/project/what-time-ish/overview).



## Firebase Setup

#### Install Firebase tools
`npm install firebase-tools -g`

#### Login to Firebase
`firebase login`

#### Initialize Firebase
`firebase init`

1. Are you ready to proceed? `Y`
2.  Which Firebase CLI features do you want to setup for this folder? Press Space to select features, then Enter to confirm your choices. `Hosting: Configure and deploy Firebase Hosting sites`
3. Select a defualt Firebase project for this directory `what-time-ish`
4. Your public directory is the folder (relative to your project directory) that will contain Hosting assets to be uploaded with your firebase deploy. If you have a build process for your assets, use for build's output directory. `build`
5. Configgure as a single-pagge app (rewrite all urls to /index.html)? `Y`


## Other

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Firebase configuration reference is [here](https://medium.com/@devesu/host-a-react-based-website-free-of-cost-with-firebase-hosting-and-connect-with-your-own-domain-53146731807f).

