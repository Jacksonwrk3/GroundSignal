import React from "react";

// allowed gallery component to be assigned number of columns and gap size to be more dynamic it's also w-full so whatever container it is put in it'll fit into
const Gallery = (props) => {
  let galleryImages = props.images.map((imageURL) => {
    return (
      <img
        src={imageURL}
        key={imageURL}
        // some of the image links are broken, so instead of loading an empty box with the image icon on it, if there is an error loading that image, we won't load it at all
        onError={(e) => {
          e.target.style.display = "none";
        }}
      />
    );
  });
  return (
    <div
      className={`w-full grid grid-cols-${props.colNum} gap-${props.gapNum} ${props.className}`}
    >
      {galleryImages}
    </div>
  );
};

export default Gallery;
