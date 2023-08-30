const Card = ({
  image,
  buttonLink,
  titleText,
  subText,
  backgroundColor,
  width,
  height,
  textPadding,
  background,
  toPlaceAt,
  color,
}) => {
  const defaultCardStyle = {
    width: "340px",
    height: "560px",
    color: color || "black",
  };

  if (toPlaceAt === "routine") {
    return (
      <>
        <div className="new-card" style={defaultCardStyle}>
          <div
            className="image-contaner"
            style={{
              width: "100%",
              height: "50%",
              background: background || "none",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <div
              className="image-frame"
              style={{
                height: "90%",
                width: "80%",
                background: "#121212",
                borderRadius: "50%",
              }}
            >
              {image}
            </div>
          </div>
          <div
            className="text"
            style={{
              padding: textPadding || "0",
              marginTop: "20px",
              height: "40%",
            }}
          >
            <h4>{titleText}</h4>
            <p style={{ textAlign: "justify" }}>{subText}</p>
          </div>
          <div className="button-link" style={{ height: "10%" }}>
            {buttonLink}
          </div>
        </div>
      </>
    );
  } else if (toPlaceAt === "nutrition") {
    return (
      <>
        <div className="new-card" style={defaultCardStyle}>
          <div
            className="image-contaner"
            style={{
              width: "100%",
              height: "50%",
            }}
          >
            {image}
          </div>
          <div
            className="text"
            style={{
              padding: textPadding || "0",
              marginTop: "20px",
              height: "40%",
            }}
          >
            <h4>{titleText}</h4>
            <p style={{ textAlign: "justify" }}>{subText}</p>
          </div>
          <div className="button-link" style={{ height: "10%" }}>
            {buttonLink}
          </div>
        </div>
      </>
    );
  }
};

export default Card;
