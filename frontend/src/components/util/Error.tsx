import { Alert } from "@mui/material";
import React from "react";

type ErrorProps = {
  text: string;
};

const Error: React.FC<ErrorProps> = ({ text }) => {
  return <Alert severity="error">{text}</Alert>;
};

export default Error;
