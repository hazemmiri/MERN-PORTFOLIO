import React from "react";
import Zoom from "react-reveal/Zoom";
import { Rotate } from "react-swift-reveal";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <Zoom>
                  <div className="row bordeer-line">
                    <img
                      src="https://img.freepik.com/photos-gratuite/hot-line-contactez-nous-centre-appels-interface-recherche_53876-124009.jpg?w=740&t=st=1711164501~exp=1711165101~hmac=8991298dc34e3bda013509261c703c4e40ce8f320ab682ed5426f978d3050be9"
                      alt="ocontact"
                    />
                  </div>
                </Zoom>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="row">
                <Rotate>
                  <div className="card2 d-flex card border-0 px-5 py-5">
                    <h6>
                      Contact With
                      <FaLinkedin color="blue" size={36} className="ms-2" />
                      <FaGithub color="black" size={36} className="ms-2" />
                      <FaFacebook color="blue" size={36} className="ms-2" />
                    </h6>
                  </div>
                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <div className="row px-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      className="mb-3"
                    />
                  </div>
                  <div className="row px-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Your Email Aderess"
                      className="mb-3"
                    />
                  </div>
                  <div className="row px-3">
                    <textarea
                      type="text"
                      name="msg"
                      placeholder="write your message"
                      className="mb-3"
                    />
                  </div>
                  <div className="row px-3">
                    <button className="button" type="submit">
                      SEND MESSEGE
                    </button>
                  </div>
                </Rotate>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
