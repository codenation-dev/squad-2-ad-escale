import React from 'react';
import FooterNav from './FooterNav';
import FooterSocialTrademark from './FooterSocialTrademark';
import './index.css';

// Componente de footer global
export default function Footer() {
  return (
    <>
      <FooterNav classNameProp="footer-nav" />
      <FooterSocialTrademark classNameProp="footer-social" />
    </>
  );
}
