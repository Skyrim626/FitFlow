import Container from "react-bootstrap/Container";
import Heading from "./Heading";
import Link from "./Link";
import CustomizeButton from "../components/CustomizeButton";
import "../css/Navbar.css";
import { useState } from "react";

const Navbar = () => {
  // Navbar Scroll Down Effect
  const [navigation, setNavigation] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 1) {
      setNavigation(true);
    } else {
      setNavigation(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <nav className={navigation ? "navigation active" : "navigation"}>
        <div className="container py-3 navbar">
          <Heading
            text={"FitFlow"}
            highlight={true}
            fontSize={"40px"}
            cursor={"pointer"}
            letterSpacing={"5px"}
            setNavEffect={navigation}
            color={"white"}
          />

          <ul className="d-flex align-items-center justify-content-center gap-4 m-0">
            <Link
              text={"Home"}
              textDecoration={false}
              fontSize={"18px"}
              color={"white"}
              addEffect={true}
            />
            <Link
              text={"Blog"}
              textDecoration={false}
              fontSize={"18px"}
              color={"white"}
              addEffect={true}
            />
            <Link
              text={"About US"}
              textDecoration={false}
              fontSize={"18px"}
              color={"white"}
              addEffect={true}
            />
            <Link
              text={"Contact"}
              textDecoration={false}
              fontSize={"18px"}
              color={"white"}
              addEffect={true}
            />
            <CustomizeButton text={"Get Started"} navEffect={navigation} />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
