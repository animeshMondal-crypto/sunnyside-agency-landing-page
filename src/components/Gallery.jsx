function Gallery() {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-2">
      <div>
        <img
          src="/images/desktop/image-gallery-milkbottles.jpg"
          alt="gallery-img"
        />
      </div>
      <div>
        <img src="/images/desktop/image-gallery-orange.jpg" alt="gallery-img" />
      </div>
      <div>
        <img src="/images/desktop/image-gallery-cone.jpg" alt="gallery-img" />
      </div>
      <div>
        <img
          src="/images/desktop/image-gallery-sugarcubes.jpg"
          alt="gallery-img"
        />
      </div>
    </div>
  );
}

export default Gallery;
