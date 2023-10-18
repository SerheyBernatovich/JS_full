export const addImage = (imgSrc, callback) => {
  const imgEl = document.createElement('img');
  imgEl.setAttribute('alt', 'My photo');
  imgEl.src = imgSrc;
  const containerEl = document.querySelector('.page');
  containerEl.append(imgEl);

  imgEl.addEventListener('load', () => callback(null, imgEl));
  imgEl.addEventListener('error', () => callback('Image load is failed'));
};

// callack function
const onImageLoaded = (error, imgElem) => {
  if (error) {
    console.log(error);
    return;
  }

  const { width, height } = imgElem;
  const sizeElem = document.querySelector('.image-size');

  sizeElem.textContent = `${width} x ${height}`;
};

// examples
addImage(
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
  onImageLoaded,
);
