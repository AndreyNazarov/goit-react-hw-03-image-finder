import { createPortal } from 'react-dom';
import React, { Component } from 'react';
import './Modal.css';
const rootModal = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleBackdrop);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleBackdrop);
  }

  handleBackdrop = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  hideBackdrop = e => {
    console.log(e.currentTarget);
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { src, alt } = this.props;
    return (
      <div className="Overlay" onClick={this.hideBackdrop}>
        <div className="Modal">
          <img src={src} alt={alt} />
        </div>
      </div>
    );
  }
}

export default Modal;
