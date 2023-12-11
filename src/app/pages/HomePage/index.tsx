import { InteligenceData } from 'app/components/InteligenceData';
import { Matrix } from 'app/components/Matrix';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="homepage" />
      </Helmet>
      <Matrix />
      <InteligenceData />
    </>
  );
}
