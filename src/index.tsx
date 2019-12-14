import React from "react";
import ReactDOM from "react-dom";
import client from "./client";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";

import "antd/dist/antd.css";
import "./index.css";
import { HomePage, ServicesPage } from "./pages";
import { Toolbar } from "./components";

const Main: React.FC<any> = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Toolbar />
        <Switch>
          <Route exact path="/" component={() => <HomePage />} />
          <Route path="/services" component={() => <ServicesPage />} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
