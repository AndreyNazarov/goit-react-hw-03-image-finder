import './ImageGallery.css';
import { v4 as uuidv4 } from 'uuid';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
const ImageGallery = ({ images }) => {
  return (
    <>
      <ul className="ImageGallery">
        {images.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            src={webformatURL}
            alt={tags}
            largeImg={largeImageURL}
            key={id}
          />
        ))}
      </ul>
    </>
  );
};

export default ImageGallery;
