import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import './ImageGalleryItem.css';
import { v4 as uuidv4 } from 'uuid';

const ImageGalleryItem = ({ src, largeImg, alt }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    return setShowModal(!showModal);
  };

  return (
    <li className="ImageGalleryItem">
      <img
        onClick={toggleModal}
        src={src}
        alt={alt}
        className="ImageGalleryItem-image"
      />
      {showModal && <Modal onClose={toggleModal} src={largeImg} alt={alt} />}
    </li>
  );
};

export default ImageGalleryItem;
