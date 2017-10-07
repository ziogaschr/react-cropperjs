'use strict';

Object.defineProperty(exports, '__esModule', {
   value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _cropperjs = require('cropperjs');

var _cropperjs2 = _interopRequireDefault(_cropperjs);

require('cropperjs');

require('cropperjs/dist/cropper.css');

var CropperJS = (function (_React$Component) {
   _inherits(CropperJS, _React$Component);

   function CropperJS() {
      _classCallCheck(this, CropperJS);

      _get(Object.getPrototypeOf(CropperJS.prototype), 'constructor', this).apply(this, arguments);
   }

   _createClass(CropperJS, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
         var options = {};
         for (var prop in this.props) {
            if (prop !== 'src' && prop !== 'alt' && prop !== 'crossOrigin') {
               options[prop] = this.props[prop];
            }
         }
         this.cropper = new _cropperjs2['default'](this.refs.img, options);
      }
   }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
         if (nextProps.src !== this.props.src) {
            this.replace(nextProps.src);
         }
         if (nextProps.aspectRatio !== this.props.aspectRatio) {
            this.setAspectRatio(nextProps.aspectRatio);
         }
      }
   }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
         if (this.cropper) {
            // Destroy the cropper, this makes sure events such as resize are cleaned up and do not leak
            this.cropper.destroy();
            // While we're at it remove our reference to the jQuery instance
            //   delete this.$img;
         }
      }
   }, {
      key: 'move',
      value: function move(offsetX, offsetY) {
         return this.cropper.move(offsetX, offsetY);
      }
   }, {
      key: 'zoom',
      value: function zoom(ratio) {
         return this.cropper.zoom(ratio);
      }
   }, {
      key: 'rotate',
      value: function rotate(degree) {
         return this.cropper.rotate(degree);
      }
   }, {
      key: 'enable',
      value: function enable() {
         return this.cropper.enable();
      }
   }, {
      key: 'disable',
      value: function disable() {
         return this.cropper.disable();
      }
   }, {
      key: 'reset',
      value: function reset() {
         return this.cropper.reset();
      }
   }, {
      key: 'clear',
      value: function clear() {
         return this.cropper.clear();
      }
   }, {
      key: 'replace',
      value: function replace(url) {
         return this.cropper.replace(url);
      }
   }, {
      key: 'getData',
      value: function getData(rounded) {
         return this.cropper.getData(rounded);
      }
   }, {
      key: 'setData',
      value: function setData(data) {
         return this.cropper.setData(data);
      }
   }, {
      key: 'getContainerData',
      value: function getContainerData() {
         return this.cropper.getContainerData();
      }
   }, {
      key: 'getImageData',
      value: function getImageData() {
         return this.cropper.getImageData();
      }
   }, {
      key: 'getCanvasData',
      value: function getCanvasData() {
         return this.cropper.getCanvasData();
      }
   }, {
      key: 'setCanvasData',
      value: function setCanvasData(data) {
         return this.cropper.setCanvasData(data);
      }
   }, {
      key: 'getCropBoxData',
      value: function getCropBoxData() {
         return this.cropper.getCropBoxData();
      }
   }, {
      key: 'setCropBoxData',
      value: function setCropBoxData(data) {
         return this.cropper.setCropBoxData(data);
      }
   }, {
      key: 'getCroppedCanvas',
      value: function getCroppedCanvas(options) {
         return this.cropper.getCroppedCanvas(options);
      }
   }, {
      key: 'setAspectRatio',
      value: function setAspectRatio(aspectRatio) {
         return this.cropper.setAspectRatio(aspectRatio);
      }
   }, {
      key: 'setDragMode',
      value: function setDragMode() {
         return this.cropper.setDragMode();
      }
   }, {
      key: 'render',
      value: function render() {
         var imgStyle = {
            opacity: 0
         };
         return _react2['default'].createElement(
            'div',
            {
               style: this.props.style,
               src: null,
               crossOrigin: null,
               alt: null },
            _react2['default'].createElement('img', {
               crossOrigin: this.props.crossOrigin,
               ref: 'img',
               src: this.props.src,
               alt: this.props.alt === undefined ? 'picture' : this.props.alt,
               style: imgStyle })
         );
      }
   }]);

   return CropperJS;
})(_react2['default'].Component);

CropperJS.defaultProps = {
   alt: '',
   crossOrigin: '',
   style: {},
   src: null
};

CropperJS.propTypes = {
   // react cropper options
   crossOrigin: _propTypes2['default'].string,
   src: _propTypes2['default'].string,
   alt: _propTypes2['default'].string,
   style: _propTypes2['default'].object,

   // cropper options
   aspectRatio: _propTypes2['default'].number,
   crop: _propTypes2['default'].func,
   preview: _propTypes2['default'].string,
   strict: _propTypes2['default'].bool,
   responsive: _propTypes2['default'].bool,
   checkImageOrigin: _propTypes2['default'].bool,
   background: _propTypes2['default'].bool,
   modal: _propTypes2['default'].bool,
   guides: _propTypes2['default'].bool,
   highlight: _propTypes2['default'].bool,
   autoCrop: _propTypes2['default'].bool,
   autoCropArea: _propTypes2['default'].number,
   dragCrop: _propTypes2['default'].bool,
   movable: _propTypes2['default'].bool,
   cropBoxMovable: _propTypes2['default'].bool,
   cropBoxResizable: _propTypes2['default'].bool,
   doubleClickToggle: _propTypes2['default'].bool,
   zoomable: _propTypes2['default'].bool,
   mouseWheelZoom: _propTypes2['default'].bool,
   touchDragZoom: _propTypes2['default'].bool,
   rotatable: _propTypes2['default'].bool,
   minContainerWidth: _propTypes2['default'].number,
   minContainerHeight: _propTypes2['default'].number,
   minCanvasWidth: _propTypes2['default'].number,
   minCanvasHeight: _propTypes2['default'].number,
   minCropBoxWidth: _propTypes2['default'].number,
   minCropBoxHeight: _propTypes2['default'].number,

   // cropper callbacks
   build: _propTypes2['default'].func,
   built: _propTypes2['default'].func,
   cropstart: _propTypes2['default'].func,
   cropmove: _propTypes2['default'].func,
   cropend: _propTypes2['default'].func,
   zoom: _propTypes2['default'].func
};

exports['default'] = CropperJS;
module.exports = exports['default'];
