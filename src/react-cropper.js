import React from 'react';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';

/**
 * Utilities extracted from https://github.com/fengyuanchen/cropperjs/blob/master/src/js/utilities.js
 */

var REGEXP_SPACES = /\s+/;
var REGEXP_TRIM = /^\s+(.*)\s+$/;

function trim(str) {
  if (typeof str === 'string') {
    str = str.trim ? str.trim() : str.replace(REGEXP_TRIM, '$1');
  }

  return str;
}

function each(obj, callback) {
  var length;
  var i;

  if (obj && isFunction(callback)) {
    if (isArray(obj) || isNumber(obj.length) /* array-like */ ) {
      for (i = 0, length = obj.length; i < length; i++) {
        if (callback.call(obj, obj[i], i, obj) === false) {
          break;
        }
      }
    } else if (isObject(obj)) {
      for (i in obj) {
        if (obj.hasOwnProperty(i)) {
          if (callback.call(obj, obj[i], i, obj) === false) {
            break;
          }
        }
      }
    }
  }
  return obj;
}

function typeOf(obj) {
  return toString.call(obj).slice(8, -1).toLowerCase();
}

function isFunction(fn) {
  return typeOf(fn) === 'function';
}

function isArray(arr) {
  return Array.isArray ? Array.isArray(arr) : typeOf(arr) === 'array';
}

function isNumber(num) {
  return typeof num === 'number' && !isNaN(num);
}

function isObject(obj) {
  return typeof obj === 'object' && obj !== null;
}

function addListener(element, type, handler) {
  var types = trim(type).split(REGEXP_SPACES);

  if (types.length > 1) {
    return each(types, function(type) {
      addListener(element, type, handler);
    });
  }

  if (element.addEventListener) {
    element.addEventListener(type, handler, false);
  } else if (element.attachEvent) {
    element.attachEvent('on' + type, handler);
  }
}

/* end utilities */

const CropperJS = React.createClass({

  propTypes: {
    // react cropper options
    crossOrigin: React.PropTypes.string,
    src: React.PropTypes.string,
    alt: React.PropTypes.string,

    // cropper options
    aspectRatio: React.PropTypes.number,
    crop: React.PropTypes.func,
    preview: React.PropTypes.string,
    strict: React.PropTypes.bool,
    responsive: React.PropTypes.bool,
    checkImageOrigin: React.PropTypes.bool,
    background: React.PropTypes.bool,
    modal: React.PropTypes.bool,
    guides: React.PropTypes.bool,
    highlight: React.PropTypes.bool,
    autoCrop: React.PropTypes.bool,
    autoCropArea: React.PropTypes.number,
    dragCrop: React.PropTypes.bool,
    movable: React.PropTypes.bool,
    cropBoxMovable: React.PropTypes.bool,
    cropBoxResizable: React.PropTypes.bool,
    doubleClickToggle: React.PropTypes.bool,
    zoomable: React.PropTypes.bool,
    mouseWheelZoom: React.PropTypes.bool,
    touchDragZoom: React.PropTypes.bool,
    rotatable: React.PropTypes.bool,
    minContainerWidth: React.PropTypes.number,
    minContainerHeight: React.PropTypes.number,
    minCanvasWidth: React.PropTypes.number,
    minCanvasHeight: React.PropTypes.number,
    minCropBoxWidth: React.PropTypes.number,
    minCropBoxHeight: React.PropTypes.number,
    build: React.PropTypes.func,
    built: React.PropTypes.func,
    dragstart: React.PropTypes.func,
    dragmove: React.PropTypes.func,
    dragend: React.PropTypes.func,
    zoomin: React.PropTypes.func,
    zoomout: React.PropTypes.func
  },

  getDefaultProps() {
    return {
      src: null
    };
  },

  componentDidMount() {
    var options = {};
    for (var prop in this.props) {
      if (prop !== 'src' && prop !== 'alt' && prop !== 'crossOrigin') {
        options[prop] = this.props[prop];
      }
    }
    this.cropper = new Cropper(this.refs.img, options);
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.src !== this.props.src) {
      this.replace(nextProps.src);
    }
    if (nextProps.aspectRatio !== this.props.aspectRatio) {
      this.setAspectRatio(nextProps.aspectRatio);
    }
  },

  componentWillUnmount() {
    if (this.cropper) {
      // Destroy the cropper, this makes sure events such as resize are cleaned up and do not leak
      this.cropper.destroy();
    // While we're at it remove our reference to the jQuery instance
    //   delete this.$img;
    }
  },

  move(offsetX, offsetY) {
    return this.cropper.move(offsetX, offsetY);
  },

  zoom(ratio) {
    return this.cropper.zoom(ratio);
  },

  rotate(degree) {
    return this.cropper.rotate(degree);
  },

  enable() {
    return this.cropper.enable();
  },

  disable() {
    return this.cropper.disable();
  },

  reset() {
    return this.cropper.reset();
  },

  clear() {
    return this.cropper.clear();
  },

  replace(url) {
    return this.cropper.replace(url);
  },

  getData(rounded) {
    return this.cropper.getData(rounded);
  },

  getContainerData() {
    return this.cropper.getContainerData();
  },

  getImageData() {
    return this.cropper.getImageData();
  },

  getCanvasData() {
    return this.cropper.getCanvasData();
  },

  setCanvasData(data) {
    return this.cropper.setCanvasData(data);
  },

  getCropBoxData() {
    return this.cropper.getCropBoxData();
  },

  setCropBoxData(data) {
    return this.cropper.setCropBoxData(data);
  },

  getCroppedCanvas(options) {
    return this.cropper.getCroppedCanvas(options);
  },

  setAspectRatio(aspectRatio) {
    return this.cropper.setAspectRatio(aspectRatio);
  },

  setDragMode() {
    return this.cropper.setDragMode();
  },

  on(eventname, callback) {
    console.log(eventname);
    // return this.$img.on(eventname, callback);
    return addListener(this.cropper, eventname, callback);
  },

  render() {
    return (
      <div {...this.props} src={null} crossOrigin={null} alt={null}>
        <img
          crossOrigin={this.props.crossOrigin}
          ref='img'
          src={this.props.src}
          alt={this.props.alt === undefined ? 'picture' : this.props.alt}
          style={{
            opacity: 0
          }}
        />
      </div>
      );
  }
});

export default CropperJS;
