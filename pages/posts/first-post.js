import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function getServerSideProps(context) {
  await sleep(2000);
  return {
    props: {
      teste: 'teste'
    }
  }
}

export default function FirstPost({ teste }) {
  return (
    <Layout>
      <Head>
        <title>First post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {teste}
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}