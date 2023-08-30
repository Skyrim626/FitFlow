const Image = ({ src, alt, isHero, opacity }) => {
  const imageStyle = {
    width: "100%",
    height: "100%",
    position: isHero ? "absolute" : "static",
    transition: "0.6s",
    backgroundSize: "cover",
    opacity: opacity || "1",
    // Add transition property
  };

  return <img src={src} alt={alt} style={imageStyle} loading="lazy" />;
};

export default Image;
