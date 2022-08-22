import React from 'react';
import styles from './Project.module.scss';
import { Typography } from '@mui/material';
import Link from 'next/link';
import Head from 'next/head';
import { getPosts } from '../../graphqlFunctions';
import Bl from '../../components/Blog/Bl';
import { NextSeo } from 'next-seo';

const index = ({ posts }) => {
  return (
    <div className={styles.projects}>
      <NextSeo
        title='Primedevs Blog'
        description='Read our blog and stay up to date with the latest news and updates.'
        canonical='https://www.primedevs.co/blog'
        openGraph={{
          url: 'https://www.primedevs.co/blog',
          description:
            'Read our blog and stay up to date with the latest news and updates.',
        }}
      />
      <div className={styles.projects_container}>
        <Typography variant='h4' gutterBottom component='div'>
          Our Blog posts
        </Typography>
        <div className={styles.our_work_container}>
          {posts.map((post) => (
            <Bl post={post.node} key={post.node.slug} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
