import React from 'react';
import data from '../../data/index/projects.json';
import styles from '../../styles/Projects.module.scss';
import Pr from '../../components/Project/Pr';
import { Typography } from '@mui/material';
import Link from 'next/link';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

export default function index({ projects }) {
  return (
    <div className={styles.projects}>
      <NextSeo
        title='Primedevs Projects'
        description='See our projects and learn more about our services.'
        canonical='https://www.primedevs.co/projects'
        openGraph={{
          url: 'https://www.primedevs.co/projects',
          description: 'See our projects and learn more about our services.',
        }}
      />
      <div className={styles.projects_container}>
        <Typography variant='h4' gutterBottom component='div'>
          Our work
        </Typography>
        <div className={styles.our_work_container}>
          {projects.map((project) => (
            <Link href={`/project/${project._id}`} key={project._id.toString()}>
              <a>
                <Pr project={project} />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { projects: data }, // will be passed to the page component as props
  };
}
