import React from 'react';

const ContactImage = path => {
  const placeholder = '/img/avatar_placeholder.png';
  const imagePath = path.length ? '' : placeholder;

  return (
    <div
      style={{
        width: 50,
        height: 50,
        borderRadius: '50%',
        overflow: 'hidden'
      }}>
      <img src={imagePath} alt='contact' />
    </div>
  );
};

export default ContactImage;
