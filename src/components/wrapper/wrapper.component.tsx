import React, { Fragment } from "react";
import { SearchForm, Posts } from "..";
import "./wrapper.component.styles.css";

interface IWrapperProps {}

const Wrapper: React.FC<IWrapperProps> = () => {
  return (
    <Fragment>
      <SearchForm />
      <Posts />
    </Fragment>
  );
};

export default Wrapper;
