import React, { useState } from 'react';
import styles from './Contact.module.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { Card, CardContent, Typography } from '@mui/material';

export default function Test() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const onChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    // prevents the submit button from refreshing the page
    e.preventDefault();
    //just to confirm that payload has the info you may delete it after
    console.log(userData);

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    }).then((res) => {
      console.log('Response received');
      if (res.status === 200) {
        alert('message sent successfully');
        setUserData({
          name: '',
          email: '',
          message: '',
        });
      }
    });
  };

  const [submitted, setSubmitted] = useState(false);

  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <form>
          <Card variant='none'>
            <CardContent
              sx={{ display: 'flex', flexDirection: 'column', rowGap: 1 }}
            >
              <Typography variant='h4' gutterBottom component='div'>
                Contact us
              </Typography>
              <Typography variant='body1' gutterBottom>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </Typography>
              <TextField
                id='outlined-basic'
                type='text'
                name='name'
                label='Full name'
                variant='outlined'
                size='small'
                defaultValue={userData.name}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
              />
              <TextField
                id='outlined-basic'
                type='email'
                name='email'
                label='Email'
                variant='outlined'
                size='small'
                defaultValue={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
              <TextField
                id='outlined-textarea'
                type='text'
                name='message'
                label='Your message'
                placeholder='Your message here'
                multiline
                minRows={4}
                defaultValue={userData.message}
                onChange={(e) =>
                  setUserData({ ...userData, message: e.target.value })
                }
              />
              <Button
                size='medium'
                variant='contained'
                disableElevation
                sx={{ borderRadius: 2 }}
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Send us a message
              </Button>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  );
}
