import React from 'react';
import { useRouter } from 'next/router';
import Detail from '../../components/Detail/Detail';
import projects from '../../data/index/projects.json';
import styles from './Project.module.scss';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

export default function Project() {
  const router = useRouter();
  const { projectId } = router.query;

  const projectData =
    projects.find((project) => project._id == projectId) || {};
  console.log(projectData);
  return (
    <div className={styles.project}>
      <NextSeo
        title={projectData['Name']}
        description={projectData['Short Description']}
        canonical={`https://www.primedevs.co/project/${projectId}`}
        openGraph={{
          url: `https://www.primedevs.co/project/${projectId}`,
          description: projectData['Short Description'],
        }}
      />
      <div className={styles.project_container}>
        <Detail identifier={router.query.projectId} />
      </div>
    </div>
  );
}
