import React from 'react';

import Cropper from 'cropperjs';
import 'cropperjs';
import 'cropperjs/dist/cropper.css';

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

      // cropper callbacks
      build: React.PropTypes.func,
      built: React.PropTypes.func,
      cropstart: React.PropTypes.func,
      cropmove: React.PropTypes.func,
      cropend: React.PropTypes.func,
      zoom: React.PropTypes.func
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

   render() {
      const imgStyle = {
         opacity: 0
      };
      return (
         <div
           {...this.props}
           src={null}
           crossOrigin={null}
           alt={null}>
             <img
               crossOrigin={this.props.crossOrigin}
               ref='img'
               src={this.props.src}
               alt={this.props.alt === undefined ? 'picture' : this.props.alt}
               style={imgStyle} />
         </div>
         );
   }
});

export default CropperJS;
