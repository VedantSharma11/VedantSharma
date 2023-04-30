import React from "react";
import "./footer.css"
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Vedant Sharma</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Project
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              skills
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a href="https://www.linkedin.com/in/vedantsharma13/" className="footer__social-link" target="_blank">
            <i class="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/VedantSharma11" className="footer__social-link" target="_blank">
            <i class="bx bxl-github"></i>
          </a>
          <a href="https://instagram.com/vedant_sharma__?igshid=ZDdkNTZiNTM=" className="footer__social-link" target="_blank">
            <i class="bx bxl-instagram"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; Vedant Sharma - All Rights reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
