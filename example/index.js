import React from 'react';
import ReactDOM from 'react-dom';

import CropperJS from '../dist/react-cropper';

class Demo extends React.Component {

   constructor() {
      super();
      this.state = {
         defaultSrc: 'http://i.imgur.com/n483ZwJ.jpg',
         src: 'http://i.imgur.com/n483ZwJ.jpg', // tapptv image (small)
         //  src: 'http://i.imgur.com/1gpjD9I.jpg', // iphone sky photo (large)
         preview: null
      };
      this._crop = this._crop.bind(this);
      this._onChange = this._onChange.bind(this);
      this._useDefaultImage = this._useDefaultImage.bind(this);
   }

   // Callback functions
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
      this.setState({
         preview: this.refs.cropper.getCroppedCanvas().toDataURL()
      });
   }
   // end callback functions

   _onChange(e) {
      e.preventDefault();
      let files;
      if (e.dataTransfer) {
         files = e.dataTransfer.files;
      } else if (e.target) {
         files = e.target.files;
      }
      let reader = new FileReader();
      reader.onload = () => {
         this.setState({
            src: reader.result
         });
      };
      reader.readAsDataURL(files[0]);
   }

   _useDefaultImage() {
      this.setState({
         src: this.state.defaultSrc
      });
   }

   render() {
      return (
         <div>
             <div
               className='box'
               style={{   width: '70%',   float: 'left'}}>
                 <input
                   type='file'
                   onChange={this._onChange} />
                 <button onClick={this._useDefaultImage}>
                     Use default img
                 </button>
                 <br/>
                 <br/>
                 <CropperJS
                   style={{   height: 400,   width: '100%'}}
                   aspectRatio={16 / 9}
                   guides={false}
                   src={this.state.src}
                   ref='cropper'
                   build={this._build}
                   built={this._built}
                   cropstart={this._cropstart}
                   cropmove={this._cropmove}
                   cropend={this._cropend}
                   zoom={this._zoom}
                   crop={this._crop} />
             </div>
             <div
               className='box'
               style={{   width: '30%',   float: 'right'}}>
                 <h1>Preview</h1>
                 <img
                   style={{   width: '100%'}}
                   src={this.state.preview} />
             </div>
             <br style={{   clear: 'both'}} />
         </div>
         );
   }
}

ReactDOM.render(<Demo />, document.getElementById('main'));
