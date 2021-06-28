import App from 'next/app';
import React from 'react';

const MyApp = ({ Component, pageProps }) => {
  console.log('client');
  return (
    <div className='app'>
      <Component {...pageProps} />
    </div>
  );
};

MyApp.getInitialProps = async (context) => {
  console.log('server init app');
  const appProps = await App.getInitialProps(context);
  return {
    ...appProps,
  };
};
export default MyApp;
