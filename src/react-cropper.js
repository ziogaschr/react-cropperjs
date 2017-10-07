import React from 'react';
import PropTypes from 'prop-types';

import Cropper from 'cropperjs';
import 'cropperjs';
import 'cropperjs/dist/cropper.css';

class CropperJS extends React.Component {
   componentDidMount() {
      var options = {};
      for (var prop in this.props) {
         if (prop !== 'src' && prop !== 'alt' && prop !== 'crossOrigin') {
            options[prop] = this.props[prop];
         }
      }
      this.cropper = new Cropper(this.refs.img, options);
   }

   componentWillReceiveProps(nextProps) {
      if (nextProps.src !== this.props.src) {
         this.replace(nextProps.src);
      }
      if (nextProps.aspectRatio !== this.props.aspectRatio) {
         this.setAspectRatio(nextProps.aspectRatio);
      }
   }

   componentWillUnmount() {
      if (this.cropper) {
         // Destroy the cropper, this makes sure events such as resize are cleaned up and do not leak
         this.cropper.destroy();
      // While we're at it remove our reference to the jQuery instance
      //   delete this.$img;
      }
   }

   move(offsetX, offsetY) {
      return this.cropper.move(offsetX, offsetY);
   }

   zoom(ratio) {
      return this.cropper.zoom(ratio);
   }

   rotate(degree) {
      return this.cropper.rotate(degree);
   }

   enable() {
      return this.cropper.enable();
   }

   disable() {
      return this.cropper.disable();
   }

   reset() {
      return this.cropper.reset();
   }

   clear() {
      return this.cropper.clear();
   }

   replace(url) {
      return this.cropper.replace(url);
   }

   getData(rounded) {
      return this.cropper.getData(rounded);
   }

   setData(data) {
      return this.cropper.setData(data);
   }

   getContainerData() {
      return this.cropper.getContainerData();
   }

   getImageData() {
      return this.cropper.getImageData();
   }

   getCanvasData() {
      return this.cropper.getCanvasData();
   }

   setCanvasData(data) {
      return this.cropper.setCanvasData(data);
   }

   getCropBoxData() {
      return this.cropper.getCropBoxData();
   }

   setCropBoxData(data) {
      return this.cropper.setCropBoxData(data);
   }

   getCroppedCanvas(options) {
      return this.cropper.getCroppedCanvas(options);
   }

   setAspectRatio(aspectRatio) {
      return this.cropper.setAspectRatio(aspectRatio);
   }

   setDragMode() {
      return this.cropper.setDragMode();
   }

   render() {
      const imgStyle = {
         opacity: 0
      };
      return (
         <div
           style={this.props.style}
           src={null}
           crossOrigin={null}
           alt={null}>
             <img
               crossOrigin={this.props.crossOrigin}
               ref="img"
               src={this.props.src}
               alt={this.props.alt === undefined ? 'picture' : this.props.alt}
               style={imgStyle} />
         </div>
         );
   }
}

CropperJS.defaultProps = {
  alt: '',
  crossOrigin: '',
  style: {},
  src: null
};

CropperJS.propTypes = {
  // react cropper options
  crossOrigin: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  style: PropTypes.object,

  // cropper options
  aspectRatio: PropTypes.number,
  crop: PropTypes.func,
  preview: PropTypes.string,
  strict: PropTypes.bool,
  responsive: PropTypes.bool,
  checkImageOrigin: PropTypes.bool,
  background: PropTypes.bool,
  modal: PropTypes.bool,
  guides: PropTypes.bool,
  highlight: PropTypes.bool,
  autoCrop: PropTypes.bool,
  autoCropArea: PropTypes.number,
  dragCrop: PropTypes.bool,
  movable: PropTypes.bool,
  cropBoxMovable: PropTypes.bool,
  cropBoxResizable: PropTypes.bool,
  doubleClickToggle: PropTypes.bool,
  zoomable: PropTypes.bool,
  mouseWheelZoom: PropTypes.bool,
  touchDragZoom: PropTypes.bool,
  rotatable: PropTypes.bool,
  minContainerWidth: PropTypes.number,
  minContainerHeight: PropTypes.number,
  minCanvasWidth: PropTypes.number,
  minCanvasHeight: PropTypes.number,
  minCropBoxWidth: PropTypes.number,
  minCropBoxHeight: PropTypes.number,

  // cropper callbacks
  build: PropTypes.func,
  built: PropTypes.func,
  cropstart: PropTypes.func,
  cropmove: PropTypes.func,
  cropend: PropTypes.func,
  zoom: PropTypes.func
};

export default CropperJS;
