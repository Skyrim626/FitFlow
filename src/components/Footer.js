import CustomizeButton from "./CustomizeButton";
import Heading from "./Heading";
import Link from "./Link";

const Footer = () => {
  return (
    <>
      <div className="footer" style={{ background: "#121212" }}>
        <div className="container p-5">
          <Heading
            text={"FitFlow"}
            fontWeight={"600"}
            fontSize={"35px"}
            highlight={true}
            color={"white"}
          />

          <div
            className="footer-links mt-4"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              /*  alignItems: "center", */
              flexWrap: "wrap",
            }}
          >
            <div
              className="quick-links"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <h6
                style={{
                  fontWeight: "normal",
                  fontSize: "15px",
                  color: "#d6d6d6",
                }}
              >
                Quick Links
              </h6>
              <Link
                text={"Home"}
                color={"white"}
                textDecoration="underline"
                fontSize={"15px"}
                fontWeight={"normal"}
              />
              <Link
                text={"Workout Routine"}
                color={"white"}
                textDecoration="underline"
                fontSize={"15px"}
                fontWeight={"normal"}
              />
              <Link
                text={"Nutrition Tips"}
                color={"white"}
                textDecoration="underline"
                fontSize={"15px"}
                fontWeight={"normal"}
              />
              <Link
                text={"Mindfulness and Wellness"}
                color={"white"}
                textDecoration="underline"
                fontSize={"15px"}
                fontWeight={"normal"}
              />
              <Link
                text={"Success Stories"}
                color={"white"}
                textDecoration="underline"
                fontSize={"15px"}
                fontWeight={"normal"}
              />
              <Link
                text={"Fitness Blog"}
                color={"white"}
                textDecoration="underline"
                fontSize={"15px"}
                fontWeight={"normal"}
              />
              <Link
                text={"Content"}
                color={"white"}
                textDecoration="underline"
                fontSize={"15px"}
                fontWeight={"normal"}
              />
              <Link
                text={"Contact Us"}
                color={"white"}
                textDecoration="underline"
                fontSize={"15px"}
                fontWeight={"normal"}
              />
            </div>

            {/* Container for Legal Link and Stay Connected */}
            <div
              className="link-container"
              style={{
                display: "flex",
                flexDirection: "column",

                gap: "2em",
              }}
            >
              {/*  Legal Link Container */}
              <div
                className="legal-links"
                style={{
                  display: "flex",
                  flexDirection: "column",

                  gap: "10px",
                }}
              >
                <h6
                  style={{
                    fontWeight: "normal",
                    fontSize: "15px",
                    color: "#d6d6d6",
                    textAlign: "center",
                  }}
                >
                  Legal
                </h6>
                <Link
                  text={"Terms of Use"}
                  color={"white"}
                  textDecoration="underline"
                  fontSize={"15px"}
                  fontWeight={"normal"}
                />
                <Link
                  text={"Privacy Policy"}
                  color={"white"}
                  textDecoration="underline"
                  fontSize={"15px"}
                  fontWeight={"normal"}
                />
              </div>

              {/*  Stay Connected Container */}
              <div
                className="stay-connected"
                style={{
                  gap: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Heading
                  text={"Stay Connected."}
                  fontWeight={"600"}
                  fontSize={"22px"}
                  color={"white"}
                />
                <Link
                  text={"Facebook"}
                  color={"white"}
                  textDecoration="underline"
                  fontSize={"15px"}
                  fontWeight={"normal"}
                />
                <Link
                  text={"Instagram"}
                  color={"white"}
                  textDecoration="underline"
                  fontSize={"15px"}
                  fontWeight={"normal"}
                />
                <Link
                  text={"Twitter"}
                  color={"white"}
                  textDecoration="underline"
                  fontSize={"15px"}
                  fontWeight={"normal"}
                />
                <Link
                  text={"Youtube"}
                  color={"white"}
                  textDecoration="underline"
                  fontSize={"15px"}
                  fontWeight={"normal"}
                />
              </div>
            </div>

            {/*  News Letter Container */}

            <div
              className="subscribe-container"
              style={{
                display: "flex",
                alignItems: "center",

                gap: "1.5em",

                width: "40%",
              }}
            >
              <div
                className="heading-container"
                style={{
                  displayL: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Heading
                  text={"Stay"}
                  fontWeight={"600"}
                  fontSize={"22px"}
                  color={"white"}
                />
                <Heading
                  text={"Informed."}
                  fontWeight={"600"}
                  fontSize={"22px"}
                  color={"white"}
                />
                <Heading
                  text={"Join Our."}
                  fontWeight={"600"}
                  fontSize={"22px"}
                  color={"white"}
                />
                <Heading
                  text={"Newsletter."}
                  fontWeight={"600"}
                  fontSize={"22px"}
                  color={"white"}
                />
              </div>

              <div
                className="news-letter-container"
                style={{ textAlign: "center", width: "50%" }}
              >
                <Heading
                  text={"Subscribe to Our Newsletter"}
                  fontWeight={"600"}
                  fontSize={"22px"}
                  color={"#FF0099"}
                />
                <div
                  className="form-container"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                    color: "white",
                    gap: "10px",
                  }}
                >
                  <input
                    placeholder="Email"
                    color="#d6d6d6"
                    style={{ padding: "5px" }}
                  />
                  <CustomizeButton
                    text={"Subscribe"}
                    color={"black"}
                    background={"white"}
                    width={"100%"}
                    fontSize={"1em"}
                  />
                  <div
                    className="checkbox-container"
                    style={{
                      display: "flex",
                      width: "100%",
                      textAlign: "left",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <input type="checkbox" />

                    <p
                      style={{
                        fontSize: "11px",
                        color: "white",
                        margin: "0",
                        padding: "0",
                      }}
                    >
                      By subscribing, you acknowledge that you have read and
                      agree to our{" "}
                      <a style={{ cursor: "pointer" }}>
                        <u>Terms of Use</u>
                      </a>{" "}
                      and{" "}
                      <a style={{ cursor: "pointer" }}>
                        <u>Privacy Policy</u>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div
              className="subscribe-container"
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",

                gap: "10px",
                background: "gray",
                flexGrow: "1",
              }}
            >
              <Heading
                text={"Subscribe to Our Newsletter"}
                fontWeight={"600"}
                fontSize={"22px"}
                color={"#FF0099"}
                width={"80%"}
              />
              <div
                className="form-container"
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  width: "50%",
                  background: "green",
                  gap: "10px",
                }}
              >
                <input
                  placeholder="Email"
                  color="#d6d6d6"
                  style={{ padding: "5px" }}
                />
                <CustomizeButton
                  text={"Subscribe"}
                  color={"black"}
                  background={"white"}
                  width={"100%"}
                  fontSize={"1em"}
                />
                <div
                  className="checkbox-container"
                  style={{
                    display: "flex",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <input type="checkbox" />

                  <p style={{ fontSize: "10px" }}>
                    By subscribing, you acknowledge that you have read and agree
                    to our Terms of Use and Privacy Policy.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="copyright" style={{ borderTop: "1px solid #d6d6d6" }}>
          <div className="container p-3">
            <p
              style={{
                textAlign: "center",
                margin: "0",
                padding: "0",
                color: "#d6d6d6",
                fontSize: "13px",
              }}
            >
              Copyright © 2023 FitFlow Guide. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
