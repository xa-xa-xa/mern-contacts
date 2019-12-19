import React, { Fragment } from 'react';
import ContactImage from './contactImage';
// import axios from 'axios';

const ImageUpload = () => {
  // const [file, setFile] = useState(null);

  // const onSubmit = e => {
  //   e.preventDefault();

  //   const formData = new FormData();
  //   formData.append('myImage', file);
  //   const config = {
  //     headers: {
  //       'content-type': 'multipart/form-data'
  //     }
  //   };
  //   axios
  //     .post('/upload', formData, config)
  //     .then(res => {
  //       console.log(res);
  //       alert('Image Uploaded!');
  //     })
  //     .catch(err => console.log(err));
  // };

  // const onChange = e => setFile(e.target.files[0]);

  return (
    <Fragment>
      <ContactImage />
      {/* <form onSubmit={onSubmit}>
        <input type='file' name='myImage' onChange={onChange} />
        <button className='delete-image'>X</button>
        <button type='submit'>Upload</button>
      </form> */}
    </Fragment>
  );
};

export default ImageUpload;
