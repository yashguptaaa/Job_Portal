import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaLinkedin,FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Yash Gupta.</div>
      <div>
        <Link
          to={"https://www.linkedin.com/in/yash-gupta-81b45b235/"}
          target="_blank"
        >
          <FaLinkedin />
        </Link>
        <Link
          to={"https://github.com/yashguptaaa?tab=repositories"}
          target="_blank"
        >
          <FaGithub />
        </Link>
        <Link
          to={"https://www.instagram.com/gupta_yash18?igsh=ZHJ0cmZzeDFvMGI1"}
          target="_blank"
        >
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
