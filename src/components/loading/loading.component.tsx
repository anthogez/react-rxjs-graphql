import React from "react";
import { Spin } from "antd";
import "./loading.component.styles.css";

interface ILoadingProps {}
export const Loading: React.FC<ILoadingProps> = () => (
  <div>
    <Spin size="large" />
  </div>
);

export default Loading;
