import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

import "./index.css";

const LeftNav = () => (
  <div className="align">
    <div className="left">
      <FaFacebook size={30} />
      <FaInstagram size={30} />
      <FaXTwitter size={30} />
      <FaTelegram size={30} />
      <FaGithub size={30} />
      <FaLinkedin size={30} />
    </div>
    <div className="mleft">
      <FaFacebook size={13} />
      <FaInstagram size={13} />
      <FaXTwitter size={13} />
      <FaTelegram size={13} />
      <FaGithub size={13} />
      <FaLinkedin size={13} />
    </div>
  </div>
);

export default LeftNav;
