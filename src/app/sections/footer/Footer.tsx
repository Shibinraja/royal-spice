import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="footer-info">
                <h3>Restaurant</h3>
                <p>
                  199 N Main St, Troy, <br /> NH 03465, United States
                  <br />
                  <br />
                  <strong>Phone:</strong>
                  +1 603-242-3682
                  <br />
                  <strong>Email:</strong>
                  kannannri@gmail.com
                  <br />
                </p>
                <div className="social-links mt-3">
                  <a
                    href="https://www.facebook.com/royalspicetroy"
                    className="facebook"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="twitter">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a href="#" className="instagram">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="youtube">
                    <i className="bi bi-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"> </i>
                  <a href="#">Home</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"> </i>
                  <a href="#about">About us</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"> </i>
                  <a href="#menu">Menu</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"> </i>
                  <a href="#events">Events</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"> </i>
                  <a href="#gallery">Gallery</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Restaurant</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Theme by <a href="#">DStudio Technology</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
