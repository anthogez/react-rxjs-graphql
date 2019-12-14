import React from "react";
import "./error.component.styles.css";

interface IErrorProps {
  message: string;
}
const Error: React.FC<IErrorProps> = ({ message }) => (
  <div className="error">{message}</div>
);
export default Error;
