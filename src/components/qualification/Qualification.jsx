import React, { useState } from "react";
import "./qualification.css";

function Qualification() {
  const [Toggle, setToggle] = useState(1);
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              Toggle === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={()=>setToggle(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              Toggle === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={()=>setToggle(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              Toggle === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">fff</h3>
                <span className="qualification__subtitle">Web Desginer</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2021 to Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">fff</h3>
                <span className="qualification__subtitle">
                  Software Developer
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 to Present
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">ff</h3>
                <span className="qualification__subtitle">
                  Software Engineer
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2017 to 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">ff</h3>
                <span className="qualification__subtitle">
                  Competitive Coding
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 to Present
                </div>
              </div>
            </div>
          </div>

          <div className={
              Toggle === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">ff</h3>
                <span className="qualification__subtitle">UX Desgine</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 to Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">fff</h3>
                <span className="qualification__subtitle">UI Developer</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 to Present
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">fff</h3>
                <span className="qualification__subtitle">Git Engineer</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2017 to 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">fff</h3>
                <span className="qualification__subtitle">
                  Competitive Coding
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 to Present
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
