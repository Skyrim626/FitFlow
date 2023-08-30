/**
 *
 * @param {image: component, headingText: string, subtText: string, button: component} param0
 * @returns returns a Hero Card for Hero Section (Carousel Slider)
 */
const HeroCard = ({ Image, headingText, subText, button }) => {
  // Style for content (also centering the content to the hero)
  const heroContentStyle = {
    position: "absolute",
    justifyContent: "center",
    top: "50%",
    left: "50%",
    width: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <>
      <div className="image">{Image}</div>
      <div className="hero-card" style={heroContentStyle}>
        {headingText}

        <p
          style={{
            letterSpacing: "1.6px",
            color: "white",
            width: "50%",
          }}
        >
          {subText}
        </p>
        {button}
      </div>
    </>
  );
};

export default HeroCard;
