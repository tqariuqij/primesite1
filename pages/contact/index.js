import React from 'react';
import Contact from '../../components/Contact/Contact';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
export default function contact() {
  return (
    <>
      <NextSeo
        title='Contacts | Primedevs Blog'
        description='Contact us'
        canonical='https://www.primedevs.co/contacts'
        openGraph={{
          url: 'https://www.primedevs.co/contacts',
          description: 'Contact us',
        }}
      />
      <Contact />
    </>
  );
}
