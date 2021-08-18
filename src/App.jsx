/* eslint-disable no-lone-blocks */
import { Switch, Route } from "react-router-dom";

import { useState, useEffect } from "react";

import "./App.css";


import { WelcomePage } from "./pages";


function App() {
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
      console.log("render");
    });

    if (isLoading) {
      return (
        <section>
          <p> Loading...</p>
        </section>
      );
    }
  return (
    <Switch>
      <Route exact path="/">
        <WelcomePage onClick={() => setIsLoading(true)} />
      </Route>
    </Switch>
  );
}

export default App;
