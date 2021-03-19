import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import './ImageGalleryItem.css';

class ImageGalleryItem extends Component {
  state = { showModal: false };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };
  render() {
    const { src, largeImg, alt } = this.props;
    return (
      <li className="ImageGalleryItem">
        <img
          onClick={this.toggleModal}
          src={src}
          alt={alt}
          className="ImageGalleryItem-image"
        />
        {this.state.showModal && (
          <Modal onClose={this.toggleModal} src={largeImg} alt={alt} />
        )}
      </li>
    );
  }
}

export default ImageGalleryItem;
