// Footer.js

import React from 'react';
import './Footer.css'; // 필요에 따라 스타일링을 위한 CSS 파일을 import
  
const Footer = () => { 
  return (
    <footer className="footer-container">
        <p className="CU">Contact Us</p>
        <div className="footer-content">
            <div className="mail_content">
                <img src='img/mail.png' alt="mail" className="mail"/>
                <p>pohangavengers@gmail.com</p>
            </div>
            <div className="mail_content">
                <img src='img/location.png' alt="location" className="location"/>
                <p>558, Handong-ro, Heunghae-eup, Buk-gu, Pohang-si, Gyeongsangbuk-do, Republic of Korea</p>
            </div>
            <p id="copy">&copy; Pohang Avengers 2024</p>
        </div>
    </footer>
  );
};

export default Footer;
