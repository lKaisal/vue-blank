## Frontend part:
## !Attention!
* **Dynamic image src bug. Thanks to Bemto**: this will NOT work: ```+e.IMG.image(:src="imagePathVariable")``` bemto converts image path to an emty base64 image. Don't use ```+e``` or ```+b``` bemto syntax with ```img``` tag with dynamic src. Use normal pug syntax instead ```IMG.image(:src="imagePathVariable" class="blockName__image")```

* **Async functions inside router-view hooks**: all synchronous code must run first. Any synchronous code written after ```await``` will NOT work properly.

##### Scripts
* ```yarn start``` starts backend and frontend
* ```yarn serve``` starts frontend dev server
* ```yarn build``` build in production mode
* ```yarn svg-sprite``` generates svg sprite from all svg images in this folder: ```/public/static/images/svg```

##### Folder structure
* ```/public``` dist root
* ```/public/static``` static files like fonts, pdf etc.

##### Vendors
* [validator.js](https://github.com/chriso/validator.js) all-you-need strings validation library with a la carte imports
