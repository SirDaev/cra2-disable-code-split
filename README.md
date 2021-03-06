# Disable Code Splitting in Create React App 2 & Add Cache Busting

This example demonstrates disabling code splitting when building an app created with Create React App 2. The build will output a single CSS file and a single JS file. A simple cache-busting parameter is automatically added to the file references within index.html.

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
For this example we have created a folder `scripts` in the root of our React app, and placed the `build-non-split.js` file inside it. See `scripts/build-non-split.js` in this repo.

[scripts/build-non-split.js](https://github.com/SirDaev/cra2-disable-code-split/blob/master/scripts/build-non-split.js "scripts/build-non-split.js")

**Note:** the `cacheBust` parameter will be added to the file references in `index.html`, but is removed from the actual file names.

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

<img src="https://user-images.githubusercontent.com/12941979/58575422-9ce2c500-8207-11e9-86d0-5378f31ef563.png" width="400">

## Credit
Much of this example was derived from the discussion for Create React App [issue 5306](https://github.com/facebook/create-react-app/issues/5306 "Create React App issue 5306"), specifically comments by [vonkanehoffen](https://github.com/facebook/create-react-app/issues/5306#issuecomment-433425838 "vonkanehoffen"), [jw-afc](https://github.com/facebook/create-react-app/issues/5306#issuecomment-440945317 "jw-afc"), and [illepic](https://github.com/facebook/create-react-app/issues/5306#issuecomment-447948123 "illepic").

#### v2.0.0
Comments by [vincerubinetti](https://github.com/facebook/create-react-app/issues/5306#issuecomment-533818085 "vincerubinetti") found in [issue 5306](https://github.com/facebook/create-react-app/issues/5306 "Create React App issue 5306").

## License
MIT License
