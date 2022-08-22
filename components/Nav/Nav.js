import React, { useState, useEffect } from 'react';
import styles from './Nav.module.scss';
import Image from 'next/image';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Button } from '@mui/material';
import Link from 'next/link';
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [width, setWidth] = useState();
  const handleClick = () => setMenu(!menu);
  const handleClickLogo = () => {
    if (menu) {
      setMenu(!menu);
    }
  };
  const menuClasses = () => {
    if (width <= 599) {
      const classes = menu ? styles.menu : styles.menu__mobile__inactive;
      return classes;
    } else if (width > 599) {
      return styles.menu;
    }
  };

  const menuIcon = menu ? (
    <CloseRoundedIcon onClick={handleClick} className={styles.menu__mobile} />
  ) : (
    <MenuRoundedIcon onClick={handleClick} className={styles.menu__mobile} />
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setWidth(window.innerWidth);
      }
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [width]);

  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.container__logo}>
            <Link href='/'>
              <Image
                onClick={handleClickLogo}
                src={'/logo.png'}
                layout={'fill'}
                objectFit={'contain'}
              />
            </Link>
          </div>

          <div className={menuClasses()}>
            <ul>
              <li>
                <Link href='/team'>
                  <Button
                    variant='text'
                    onClick={handleClick}
                    color='secondary'
                    sx={{ borderRadius: 2 }}
                  >
                    Team
                  </Button>
                </Link>
              </li>
              <li>
                <Link href='/post'>
                  <Button
                    variant='text'
                    onClick={handleClick}
                    color='secondary'
                    sx={{ borderRadius: 2 }}
                  >
                    Blog
                  </Button>
                </Link>
              </li>
              <li>
                <Link href='/contact'>
                  <Button
                    variant='text'
                    onClick={handleClick}
                    color='secondary'
                    sx={{ borderRadius: 2 }}
                  >
                    Contact
                  </Button>
                </Link>
              </li>
              <li>
                <Link href='/projects'>
                  <Button
                    variant='contained'
                    onClick={handleClick}
                    color='primary'
                    size='small'
                    disableElevation
                    sx={{ borderRadius: 2 }}
                  >
                    Projects
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
          {menuIcon}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
