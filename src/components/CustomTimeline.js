/* import "../css/Timeline.css"; */
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

/** import timeline css style here  */

/**
 *
 * @param {Heading: component, subText: string, contents: array of Dictionary} param0
 * @returns returns a timeline content
 * 
 * Sample of an array of Dictionary argument::::
 * const sampleDict = [
 *      {
 *          heading: "BackEnd"  
 *          subContent:"Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry." 
 *      },
        {
 *          heading: "FrontEnd"
 *          subContent:"Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry." 
 *      },
 * ]
 */
const CustomTimeline = ({ Heading, subText, contents, color }) => {
  return (
    <>
      <div
        className="top-section"
        style={{
          textAlign: "center",
          padding: "4rem 0",
          margin: "0 auto",
          color: color || "black",
        }}
      >
        {Heading}
        <p>{subText}</p>
      </div>
      <Timeline position="alternate">
        {contents.map((content, index) => (
          <TimelineItem className="mb-5">
            <TimelineSeparator>
              <TimelineDot
                variant="outlined"
                color={index % 2 == 0 ? "primary" : "secondary"}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="content" style={{ color: color || "black" }}>
                <h3>{content.heading}</h3>
                <p>{content.subContent}</p>
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      {/* <div className="timeline-container">
        <div className="top-section">
          {Heading}
          <p>{subText}</p>
        </div>
        <div className="timeline">
          <div className="line"></div>
          {contents.map((content, index) => (
            <div key={index} className="timeline-section">
              <div className="bead"></div>
              <div className="content">
                <h2>{content.heading}</h2>
                <p>{content.subContent}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
};

export default CustomTimeline;
