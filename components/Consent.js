import React, { useEffect, useState } from 'react';

import { setCookie, hasCookie } from 'cookies-next';

import styles from '../styles/cookieConsent.module.scss';

function Consent() {
  const [consent, setConsent] = useState(true);
  useEffect(() => {
    setConsent(hasCookie('localConsent'));
  }, []);

  const acceptCookie = () => {
    setConsent(true);
    setCookie('localConsent', 'true', { maxAge: 60 * 60 * 24 * 365 });
    gtag('consent', 'update', {
      ad_storage: 'granted',
      analytics_storage: 'granted',
    });
    console.log('accepting cookies');
  };

  // const closeP = () => {
  //   setConsent(true);
  //   console.log('closing');
  // };

  const denyCookie = () => {
    setConsent(true);
    setCookie('localConsent', 'false', { maxAge: 60 * 60 * 24 * 365 });
    console.log('denying cookie');
  };
  if (consent === true) {
    return null;
  }
  return (
    <div className={`${styles.cookie}  ${consent ? `${styles.hidden}` : ''}`}>
      <div>
        <h1>THIS WEBSITE USES COOKIES</h1>
        <p>
          We use cookies to personalize content, to provide social media
          features and to analyze our traffic. We also share information about
          your use of our site with analytics partners who may combine it with
          other information that you’ve provided to them or that they’ve
          collected from your use of their services. You consent to our cookies
          if you continue to use our website.
        </p>
      </div>

      <div className={styles.cookie_inner}>
        <button
          onClick={() => {
            acceptCookie();
          }}
          className=''
        >
          OK
        </button>
        <button onClick={(e) => denyCookie()} className={styles.button_accept}>
          Decline
        </button>
      </div>
    </div>
  );
}

export default Consent;
