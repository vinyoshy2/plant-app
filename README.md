# Requirements

You'll need to install Node.js before you can run the project. You can do so here: https://nodejs.org/en/download/

After installing node, run the commands "npm install" and "npm start" to launch the app. I think that's all you need to do.

# Folder Structure

## public
Should contain all assets (images, icons, etc)

## src

Contains pretty much all of the code/other data necessary for the app

### data

Should contain any simulated data we want to use, like projects or user profiles. Probably want to keep this data in JSON format. Images that are tied to simulated data (e.g. project pic) should probably be referred to be file name in the JSON, while the actual file is stored in public. I believe this is because images in the src directory can only be statically loaded in, and not dynamically.

### pages

Each subdirectory of pages should contain all the components related to a particular page of the project. Feel free to set up further subdirectories within each page folder -- your page will probably consist of multiple components. I think keeping the css and js files for a single component in the same place is probably good though?

### shared

Any components that need to be reused across multiple pages should go here. Not sure exactly what that would include at the moment though. Probably the header with the hamburger menu.

### utils

Any random javascript helper functions can go here if you want. Not sure if we'll really need it

# Notable files

## index.js 

I think this is the very first place React looks when the app starts up. Currently, it tells React to load in the component contained in App.js.

## App.js

This file maps the current URL to the correct component it needs to load in. It gets the list of URls and components from ./utils/routes.js

## ./utils/routes.js

This file contains a list of the paths and components in the ROUTES list. You'll need to create another entry similar to the existing one in order to have your component accesible by URL.


## ./pages/home/Home.js and ./pages/home/Home.css

Pretty simple example of a component. Whoever's doing the home page should probably replace it.

## Everything else

Any files I didn't list, I probably don't know what they do lol


