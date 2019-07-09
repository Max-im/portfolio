import React from "react";
import { Redirect } from "react-router-dom";
import My404NotFound from "../../Pages/My404NotFound";

export default function index() {
  return (
    <>
      <My404NotFound />
      <Redirect to="/not-found" />
    </>
  );
}
