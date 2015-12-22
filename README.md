# react-cropperjs

A React Component wrapper of [cropperjs](https://github.com/fengyuanchen/cropperjs) without jQuery as a dependency. If you want to use jQuery, check out the original project [react-cropper](https://github.com/roadmanfong/react-cropper).

[![NPM](https://nodei.co/npm/react-cropperjs.png?downloads=true)](https://nodei.co/npm/react-cropperjs/)

## Demo

[See the demo in action](http://tapp-tv.github.io/react-cropperjs/example/)

## Installation

Install via [npm](https://www.npmjs.com/package/react-cropperjs)

```shell
npm install --save react-cropperjs
```

### Webpack User

You also need a couple of loaders for webpack

```shell
npm install --save-dev style-loader css-loader
```

### Browserify User

https://github.com/cheton/browserify-css

```shell
npm i --save-dev browserify-css
```

Compile your project with command line like

```shell
 browserify -t reactify -g browserify-css index.jsx > bundle.js
```

If you are using `gulp`, `browserify` or other build tools, make sure you enable `global` option `true`

For example in `gulp` you should do

```js
b.transform(browserifycss, {global: true});
```

## Quick Example using ES6

```js
import React from 'react';
import CropperJS from 'react-cropperjs';

class Demo extends React.Component {

  _crop(){
    // image in dataUrl
    console.log(this.refs.cropper.getCroppedCanvas().toDataURL());
  }

  render() {
    return (
      <CropperJS
        ref='cropper'
        src='http://i.imgur.com/n483ZwJ.jpg'
        style={{height: 400, width: '100%'}}
        // Cropper.js options
        aspectRatio={16 / 9}
        guides={false}
        crop={this._crop.bind(this)} />
    );
  }
}
```

And for those working in ES5:

```js
var React = require('react');
var CropperJS = require('react-cropperjs');

var Demo = React.createClass({
  
  _crop: function(){
    // image in dataUrl
    console.log(this.refs.cropper.getCroppedCanvas().toDataURL());
  },

  render: function() {
    return (
      <CropperJS
        ref='cropper'
        src='http://i.imgur.com/n483ZwJ.jpg'
        style={{height: 400, width: '100%'}}
        // Cropper.js options
        aspectRatio={16 / 9}
        guides={false}
        crop={this._crop} />
    );
  }
});

```


## Options

### src
* Type: `string`
* Default: `null`

```js
  <CropperJS src='http://i.imgur.com/n483ZwJ.jpg' />
```

### Other options

Accepts all options availabe in cropperjs as attributes. See [docs](https://github.com/fengyuanchen/cropperjs).

```js
  <CropperJS
    src='http://i.imgur.com/n483ZwJ.jpg'
    aspectRatio={16 / 9} 
    guides={false} 
    crop={this._crop} />
```

## Methods

Assign a `ref` attribute to use [methods](https://github.com/fengyuanchen/cropper#methods)

```js
import React from 'react';
import CropperJS from 'react-cropperjs';

class Demo extends React.Component = {

  _crop() {
    let dataUrl = this.refs.cropper.getCroppedCanvas().toDataURL();
    console.log(dataUrl);
  }

  render () {
    return (
      <CropperJS
        ref='cropper'
        crop={this._crop.bind(this)} />
    );
  }
}
```

`React.createClass` has a built-in magic feature that bound all methods to `this` automatically for you. In ES6, remember to pre-bind in the constructor or in the attribute. See [autobinding](https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding) docs for more details.

## Events

Assign [Events](https://github.com/fengyuanchen/cropper#events) handler with `.on(eventname, callback)` and `ref`.

```js

componentDidMount: function(){
  this.refs.cropper.on('dragstart.cropper', function (e) {
    console.log(e.type); // dragstart
    console.log(e.namespace); // cropper
    console.log(e.dragType); // ...
  });
},

```

## Build

```
npm run build
```

Build example
```
npm run build-example
```

## Related Projects

[JavaScript Canvas to Blob](https://github.com/blueimp/JavaScript-Canvas-to-Blob)

A lot of times, you'll get a `canvas` element drawn with the cropped image and will need to upload it to the server.

You can use [canvas.toDataURL](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL) to get a Data URL, or use [canvas.toBlob](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob) to get a blob and upload it to server with [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) if the browser supports these APIs.

## License
MIT
