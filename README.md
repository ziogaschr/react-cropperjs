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

Accepts all options available in cropperjs as attributes. See [docs](https://github.com/fengyuanchen/cropperjs).

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

class Demo extends React.Component {

  _crop() {
    let dataUrl = this.refs.cropper.getCroppedCanvas().toDataURL();
    console.log(dataUrl);
  }

  render () {
    return (
      <CropperJS
        ref='cropper'
        src='http://i.imgur.com/n483ZwJ.jpg'
        crop={this._crop.bind(this)} />
    );
  }
}
```

`React.createClass` has a built-in magic feature that bound all methods to `this` automatically for you. In ES6, remember to pre-bind in the constructor or in the attribute. See [autobinding](https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding) docs for more details.

## Callbacks

Unlike cropper, cropperjs doesn't support events, it supports the following callbacks:

* [build](https://github.com/fengyuanchen/cropperjs#build)
* [built](https://github.com/fengyuanchen/cropperjs#built)
* [cropstart](https://github.com/fengyuanchen/cropperjs#cropstart)
* [cropmove](https://github.com/fengyuanchen/cropperjs#cropmove)
* [cropend](https://github.com/fengyuanchen/cropperjs#cropend)
* [crop](https://github.com/fengyuanchen/cropperjs#crop)
* [zoom](https://github.com/fengyuanchen/cropperjs#zoom)

```js

import React from 'react';
import CropperJS from 'react-cropperjs';

class CallbackDemo extends React.Component {

   _build() {
      console.log('_build');
   }

   _built() {
      console.log('_built');
   }

   _cropstart(data) {
      console.log('_cropstart', data.action);
   }

   _cropmove(data) {
      console.log('_cropmove', data.action);
   }

   _cropend(data) {
      console.log('_cropend', data.action);
   }

   _zoom(data) {
      console.log('_zoom', data.ratio);
   }

   _crop(data) {
      console.log('_crop', data);
   }

   render() {
      return (
         <CropperJS
           ref='cropper'
           src='http://i.imgur.com/n483ZwJ.jpg'
           build={this._build}
           built={this._built}
           cropstart={this._cropstart}
           cropmove={this._cropmove}
           cropend={this._cropend}
           zoom={this._zoom}
           crop={this._crop} />
         );
   }
}

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
