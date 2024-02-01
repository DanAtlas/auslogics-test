import DataTable from 'components/data-table/DataTable';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Auslogics test</title>
        <meta name="description" content="Auslogics test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <DataTable />
      </main>
    </div>
  )
}

export default Home;
