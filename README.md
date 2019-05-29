# Disable Code Splitting with Cache Busting in Create React App 2

## 1. Install 'rewire' as a dependency
[Rewire](https://github.com/jhnns/rewire "Rewire") will allow us to override certain variables and values in the configuration.
### npm
~~~~
npm install rewire	
~~~~
### yarn
~~~~
yarn add rewire	
~~~~

## 2. Create a file `scripts/build-non-split.js`
For this example we have created a folder `scripts` in the root of our React app, and placed the `build-non-split.js` file inside it.
~~~~
const rewire = require('rewire');
const defaults = rewire('react-scripts/scripts/build.js');
const config = defaults.__get__('config');

// New name for our CSS and JS files
const newName = "app";

// Random number for cache busting
const cacheBust = '?cb='+Math.floor(Math.random() * 1000000) + 1 ;

// Consolidate chunk files instead
config.optimization.splitChunks = {
  cacheGroups: {
    default: false,
  },
};
// Move runtime into bundle instead of separate file
config.optimization.runtimeChunk = false;

// JS
config.output.filename = 'static/js/'+newName+'.js'+cacheBust;
// CSS. "5" is MiniCssPlugin
config.plugins[5].options.filename = 'static/css/'+newName+'.css'+cacheBust;
~~~~
The `cacheBust` parameter will be added to the file references in `index.html`, but is removed from the actual file names.

## 3. Modify package.json
Modify the build script in `package.json` to run our new file.
~~~~
  "scripts": {
    ...
    "build": "node scripts/build-non-split.js",
    ...
  }
~~~~

## 4. Build Your App
The next time you perform a build you should see a single CSS file and a single JS file, both named "app".

![image](https://user-images.githubusercontent.com/12941979/58575422-9ce2c500-8207-11e9-86d0-5378f31ef563.png)

## Credit
Much of this example was derived from the discussion for Create React App [issue 5306](https://github.com/facebook/create-react-app/issues/5306 "Create React App issue 5306"), specifically comments by [vonkanehoffen](https://github.com/facebook/create-react-app/issues/5306#issuecomment-433425838 "vonkanehoffen"), [jw-afc](https://github.com/facebook/create-react-app/issues/5306#issuecomment-440945317 "jw-afc"), and [illepic](https://github.com/facebook/create-react-app/issues/5306#issuecomment-447948123 "illepic").
