import React from "react";
import ReactDOM from "react-dom";
import client from "./client";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";

import "antd/dist/antd.css";
import "./index.css";
import { HomePage } from "./pages";
import { Toolbar } from "./components";

const Main: React.FC<any> = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <div>
                <Toolbar />
                <HomePage />
              </div>
            )}
          />
          <Route
            path="/services"
            component={() => (
              <div>
                <Toolbar />
                <div>Services</div>
              </div>
            )}
          />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
