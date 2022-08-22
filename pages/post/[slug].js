import React from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import styles from './Project.module.scss';
import { getPosts, getPostDetails } from '../../graphqlFunctions';
import PostDetails from '../../components/Blog/PostDetail';
import SafeHydrate from '../../components/SafeHydrate';

const PostItself = ({ post }) => {
  //   const router = useRouter();

  //   if (router.isFallback) {
  //     return <Loader />;
  //   }

  return (
    <div>
      <NextSeo
        title={`${post.title} | Prime Devs`}
        defaultTitle={`${post.title} | Prime Devs`}
        description={post.excerpt}
        openGraph={{
          url: 'https://www.primedevs.co/blog',
          description: `${post.excerpt}`,
        }}
      />

      <div className=''>
        <SafeHydrate>
          <PostDetails post={post} />
        </SafeHydrate>
      </div>
    </div>
  );
};
export default PostItself;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
