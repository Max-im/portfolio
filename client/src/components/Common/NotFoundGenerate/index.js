import React from "react";
import { Redirect } from "react-router-dom";
import NotFound from "../../Pages/NotFound";

export default function index() {
  return (
    <>
      <NotFound />
      <Redirect to="/not-found" />
    </>
  );
}
