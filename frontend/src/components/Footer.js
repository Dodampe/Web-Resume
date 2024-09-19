import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faInstagram, faGithub} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer>
      <div class="container">
        <div class="footerContainer">
          <div class="footerLogo">
            <img src="./assets/images/gifs/logo2.png" alt="Logo" />
          </div>
          <div class="footerNav">
            <p><a href="#about">About me</a></p>
            <p><a href="#services">services</a></p>
            <p><a href="./template/portifolio.html">Portifolio</a></p>
            <p><a href="#contact">contact me</a></p>
          </div>
          <div class="footerMedias">
            <div class="footerMedia">
              <a href="https://www.linkedin.com/in/laura-irene-paul"
                ><FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <div class="footerMedia">
              <a href="https://www.instagram.com/minaheryy/"
                ><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
            <div class="footerMedia">
              <a href="https://github.com/irenemmassy"
                ><FontAwesomeIcon icon={faGithub} /></a>
            </div>
          </div>
          <span>Copyright ©2024 All rights reserved </span>
        </div>
      </div>
    </footer>
  )
}
