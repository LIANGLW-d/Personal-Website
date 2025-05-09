import React from 'react';
import "./Portfolio.scss";
import { Fade } from "react-reveal";

export default function Portfolio() {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="portfolio">
        <div className="portfolio-header">
          <h1 className="portfolio-header-text">Portfolio</h1>
          <p className="subTitle">My Design Portfolio</p>
        </div>
        <div className="portfolio-main-div">
          <div className="pdf-container">
            <iframe
              src="/portfolio.pdf"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              title="Portfolio PDF"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
} 