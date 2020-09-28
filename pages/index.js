import Head from 'next/head'
import Layout from '../components/Layout'
import Prices from '../components/Prices'

export default function Home({ apiData }) {
  return (
    <div>
      <Head>
        <title>Bitz Price</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css" />
      </Head>
      <Layout>
        <h1>
          Welcome to Bitz price
        </h1>
        <p>Check Current Bitcoin rate</p>
        <h5 className="text-info">Updated At : {apiData.time.updated}</h5>
        <h5 className="text-secondary">Disclaimer : {apiData.disclaimer}</h5>
        <Prices bpi={apiData.bpi} />
      </Layout>
    </div>
  )
}

Home.getInitialProps = async () => {
  const res = await fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`);
  const jsonRes = await res.json();
  { console.log(jsonRes) }
  return { apiData: jsonRes }
}