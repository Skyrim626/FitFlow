/**
 *
 * @param {text: string, fontSize: string, highlight: boolean, cursor: string, letterSpacing: string, fontWeight: string, isHero: boolean, width: string} param0
 * @returns returns a customized heading
 */
const Heading = ({
  text,
  fontSize,
  highlight,
  color,
  cursor,
  letterSpacing,
  fontWeight,
  isHero,
  width,
}) => {
  //
  let firstCharacter = "";
  // Checks the value of hightlight if it's true
  if (text.length > 0 && highlight) {
    firstCharacter = text[0]; //Gets the first character of the text
    text = text.slice(1);
  }

  // Checks if the text for the Hero Page
  let sentenceNoLastWord;
  let lastWordText;
  if (isHero) {
    const sentence = text.split(" ");
    lastWordText = sentence[sentence.length - 1]; // Gets the last index value in the splitted array
    sentence.pop(); // Removes the last index of the array
    sentenceNoLastWord = sentence.join(" ");
  }
  console.log(sentenceNoLastWord);

  const headingStyle = {
    color: color || "black",
    fontSize: fontSize || "2em",
    fontWeight: fontWeight || "bold",
    cursor: cursor || "default",
    letterSpacing: letterSpacing || "0px",
    width: width || "auto",
  };

  return (
    <>
      {highlight || isHero ? (
        <h1 style={headingStyle}>
          {isHero ? (
            <span>
              <span>{sentenceNoLastWord} </span>
              <span style={{ color: "#FF0099" }}>{lastWordText}</span>
            </span>
          ) : (
            <span>
              <span style={{ color: "#FF0099" }}>{firstCharacter}</span>
              {text}
            </span>
          )}
          {/* <span style={{ color: "#FF0099" }}>{firstCharacter}</span>
          {text} */}
        </h1>
      ) : (
        <h1 style={headingStyle}>{text}</h1>
      )}
    </>
  );
};

export default Heading;
