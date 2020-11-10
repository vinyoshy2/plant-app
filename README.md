# Requirements

You'll need to install Node.js before you can run the project. You can do so here: https://nodejs.org/en/download/

After installing node, run the commands ``npm install`` and ``npm start`` to launch the app. I think that's all you need to do.

## Potentail Prerequisite under MacOS

1. **Error**: If you have updated your OS to latest MacOS Catalina (released Sep. 24, 2020), you might meet error  
*fsevents@X.X.X install /your-project-path/node_modules/.../fsevents*  
when doing ``npm install``.  
**Reason**: Out-of-date Mac development tool xcode.  
**Solution**:  
a. Follow Step 1 & 2 in this [link](https://stackoverflow.com/questions/62962520/npm-install-error-node-js-fsevent) to uninstall xcode-select.  
b. Follow this [link](https://www.freecodecamp.org/news/how-to-download-and-install-xcode/) to install xcode and its command line tool.  
*Note*: the .xip file needs around 40 GB free space in disk to extract. You might to clean up some files in your disk if not enough. The free space could be checked in Disk Utility app in Mac.

2. **Error**: Syntax error * } catch {* when doing ``npm start``.  
**Reason**: Out-of-date version of Node.js. Old version only support *} catch (err) {* syntax. To support the syntax in the error, it needs version >= 10  
**Solution**: Follow this [link](https://medium.com/macoclock/update-your-node-js-on-your-mac-in-2020-948948c1ffb2) to update Node to latest version.

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


