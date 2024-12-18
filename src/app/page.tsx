import React from "react";
import AllComponents from "./pages/AllComponents";

const page = () => {
  return (
    <>
      <h1>
        hello world{" "}
        <span style={{ color: "red" }}>
          Syed Muqta
          <span style={{ color: "blue" }}>deer</span>{" "}
        </span>
        s/o syed jabbar
      </h1>
      <br />
      <hr />
      <br />
      <AllComponents />
    </>
  );
};

export default page;
