import "../css/Link.css";

/**
 * A component that generates a link text
 * @param {text: string, to: string, textDecoration: boolean, fontSize: string, color: string, fontWeight: string, addEffect: boolean, letterSpacing: string} param0
 * @returns returns a customized link text
 */
const Link = ({
  text,
  to,
  textDecoration,
  fontSize,
  color,
  fontWeight,
  addEffect,
  letterSpacing,
}) => {
  // Style for Link
  /* const [navLink, setNavLink] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 1 && setNavffect) {
      console.log("Link text is " + setNavffect);
      console.log("true working");
    } else {
      console.log("false working");
    }
  };

  window.addEventListener("scroll", changeBackground); */

  // Style for List
  const listStyle = {
    listStyle: "none",
  };

  //Style for link
  const linkStyle = {
    textDecoration: textDecoration ? "underline" : "none",
    cursor: "pointer",
    fontSize: fontSize || "10px",
    color: color || "black",
    fontWeight: fontWeight || "normal",
    position: "relative",
    letterSpacing: letterSpacing || "0px",
  };

  return (
    <>
      {textDecoration ? (
        <li style={listStyle}>
          <a href={to} style={linkStyle} className={addEffect ? "effect" : ""}>
            {text}
          </a>
        </li>
      ) : (
        <li style={listStyle}>
          <a href={to} style={linkStyle} className={addEffect ? "effect" : ""}>
            {text}
          </a>
        </li>
      )}
    </>
  );
};

export default Link;
