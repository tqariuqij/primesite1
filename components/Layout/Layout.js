import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import styles from './Layout.module.scss';
import CookieConsent, { Cookies } from 'react-cookie-consent';
import { DefaultSeo } from 'next-seo';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <DefaultSeo
        title='Prime Devs'
        description='Launch faster with no-code tools. It saves you time, money & gives a professional finish.'
        canonical='https://www.primedevs.co'
        openGraph={{
          url: 'https://www.primedevs.co',
          description:
            'Launch faster with no-code tools. It saves you time, money & gives a professional finish.',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
