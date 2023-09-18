import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import testPageResource from '../resources/test-page'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Internal Security Manager</title>
          <meta
            property="og:title"
            content="test-page - Internal Security Manager"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_j3pfac) => (
            <>
              <h1>{context_j3pfac?.Name}</h1>
            </>
          )}
          initialData={props.contextJ3pfacProp}
          persistDataDuringLoading={true}
          key={props?.contextJ3pfacProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const contextJ3pfacProp = await testPageResource({
      ...context?.params,
    })
    return {
      props: {
        contextJ3pfacProp: contextJ3pfacProp?.data?.[0],
      },
    }
  } catch (errro) {
    return {
      notFound: true,
    }
  }
}
