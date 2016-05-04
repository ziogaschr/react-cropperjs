'use strict';

Object.defineProperty(exports, '__esModule', {
   value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cropperjs = require('cropperjs');

var _cropperjs2 = _interopRequireDefault(_cropperjs);

require('cropperjs');

require('cropperjs/dist/cropper.css');

var CropperJS = _react2['default'].createClass({
   displayName: 'CropperJS',

   propTypes: {
      // react cropper options
      crossOrigin: _react2['default'].PropTypes.string,
      src: _react2['default'].PropTypes.string,
      alt: _react2['default'].PropTypes.string,

      // cropper options
      aspectRatio: _react2['default'].PropTypes.number,
      crop: _react2['default'].PropTypes.func,
      preview: _react2['default'].PropTypes.string,
      strict: _react2['default'].PropTypes.bool,
      responsive: _react2['default'].PropTypes.bool,
      checkImageOrigin: _react2['default'].PropTypes.bool,
      background: _react2['default'].PropTypes.bool,
      modal: _react2['default'].PropTypes.bool,
      guides: _react2['default'].PropTypes.bool,
      highlight: _react2['default'].PropTypes.bool,
      autoCrop: _react2['default'].PropTypes.bool,
      autoCropArea: _react2['default'].PropTypes.number,
      dragCrop: _react2['default'].PropTypes.bool,
      movable: _react2['default'].PropTypes.bool,
      cropBoxMovable: _react2['default'].PropTypes.bool,
      cropBoxResizable: _react2['default'].PropTypes.bool,
      doubleClickToggle: _react2['default'].PropTypes.bool,
      zoomable: _react2['default'].PropTypes.bool,
      mouseWheelZoom: _react2['default'].PropTypes.bool,
      touchDragZoom: _react2['default'].PropTypes.bool,
      rotatable: _react2['default'].PropTypes.bool,
      minContainerWidth: _react2['default'].PropTypes.number,
      minContainerHeight: _react2['default'].PropTypes.number,
      minCanvasWidth: _react2['default'].PropTypes.number,
      minCanvasHeight: _react2['default'].PropTypes.number,
      minCropBoxWidth: _react2['default'].PropTypes.number,
      minCropBoxHeight: _react2['default'].PropTypes.number,

      // cropper callbacks
      build: _react2['default'].PropTypes.func,
      built: _react2['default'].PropTypes.func,
      cropstart: _react2['default'].PropTypes.func,
      cropmove: _react2['default'].PropTypes.func,
      cropend: _react2['default'].PropTypes.func,
      zoom: _react2['default'].PropTypes.func
   },

   getDefaultProps: function getDefaultProps() {
      return {
         src: null
      };
   },

   componentDidMount: function componentDidMount() {
      var options = {};
      for (var prop in this.props) {
         if (prop !== 'src' && prop !== 'alt' && prop !== 'crossOrigin') {
            options[prop] = this.props[prop];
         }
      }
      this.cropper = new _cropperjs2['default'](this.refs.img, options);
   },

   componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
      if (nextProps.src !== this.props.src) {
         this.replace(nextProps.src);
      }
      if (nextProps.aspectRatio !== this.props.aspectRatio) {
         this.setAspectRatio(nextProps.aspectRatio);
      }
   },

   componentWillUnmount: function componentWillUnmount() {
      if (this.cropper) {
         // Destroy the cropper, this makes sure events such as resize are cleaned up and do not leak
         this.cropper.destroy();
         // While we're at it remove our reference to the jQuery instance
         //   delete this.$img;
      }
   },

   move: function move(offsetX, offsetY) {
      return this.cropper.move(offsetX, offsetY);
   },

   zoom: function zoom(ratio) {
      return this.cropper.zoom(ratio);
   },

   rotate: function rotate(degree) {
      return this.cropper.rotate(degree);
   },

   enable: function enable() {
      return this.cropper.enable();
   },

   disable: function disable() {
      return this.cropper.disable();
   },

   reset: function reset() {
      return this.cropper.reset();
   },

   clear: function clear() {
      return this.cropper.clear();
   },

   replace: function replace(url) {
      return this.cropper.replace(url);
   },

   getData: function getData(rounded) {
      return this.cropper.getData(rounded);
   },

   setData: function setData(data) {
      return this.cropper.setData(data);
   },

   getContainerData: function getContainerData() {
      return this.cropper.getContainerData();
   },

   getImageData: function getImageData() {
      return this.cropper.getImageData();
   },

   getCanvasData: function getCanvasData() {
      return this.cropper.getCanvasData();
   },

   setCanvasData: function setCanvasData(data) {
      return this.cropper.setCanvasData(data);
   },

   getCropBoxData: function getCropBoxData() {
      return this.cropper.getCropBoxData();
   },

   setCropBoxData: function setCropBoxData(data) {
      return this.cropper.setCropBoxData(data);
   },

   getCroppedCanvas: function getCroppedCanvas(options) {
      return this.cropper.getCroppedCanvas(options);
   },

   setAspectRatio: function setAspectRatio(aspectRatio) {
      return this.cropper.setAspectRatio(aspectRatio);
   },

   setDragMode: function setDragMode() {
      return this.cropper.setDragMode();
   },

   render: function render() {
      var imgStyle = {
         opacity: 0
      };
      return _react2['default'].createElement(
         'div',
         _extends({}, this.props, {
            src: null,
            crossOrigin: null,
            alt: null }),
         _react2['default'].createElement('img', {
            crossOrigin: this.props.crossOrigin,
            ref: 'img',
            src: this.props.src,
            alt: this.props.alt === undefined ? 'picture' : this.props.alt,
            style: imgStyle })
      );
   }
});

exports['default'] = CropperJS;
module.exports = exports['default'];
