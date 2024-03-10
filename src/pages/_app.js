import React from "react";
import "../app/globals.css";
import "notyf/notyf.min.css";

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
