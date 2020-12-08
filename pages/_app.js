import "../styles/globals.css";
import { Provider } from "next-auth/client";
import React, { useState, useEffect } from "react";
import ReducerProvider from "../Reducers/ReducerProvider";

export default function App({ Component, pageProps }) {
  const [initialState, setInitialState] = useState(null);

  useEffect(async () => {
    const response = await fetch("/api/appData");
    const body = await response.json();
    setInitialState(body);
  }, []);

  if (initialState === null) {
    return null;
    // could render some loading component here
  }

  return (
    // template for every page
    // Component is the page that is being rendered
    <Provider session={pageProps.session}>
      <ReducerProvider initialState={initialState}>
        <Component {...pageProps} />
      </ReducerProvider>
    </Provider>
  );
}
