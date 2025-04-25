import React from "react";
import "./LateralContact.scss";

function LateralContact({ className = "" }) {
  return (
    <div className={`contato ${className}`}>
      <ul>
        <li className="linkedin">
          Linkedin
          <a
            target="_blank"
            rel="noreferrer"
            className="linkedin"
            href="https://www.linkedin.com/in/engheltonmori/"
          >
            <i className="icon-linkedin"></i>
          </a>
        </li>
        <li className="github">
          Github
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/helton-mori-dev"
          >
            <i className="icon-github-circled"></i>
          </a>
        </li>
        <li className="email">
          Email
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:heltonmori@gmail.com"
          >
            <i className="icon-gmail"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
export default LateralContact;
