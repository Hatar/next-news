import React from "react";
import Image from "next/image";
import imageProfile from "../public/ee53e5d3156ca13ecb8bded567a3dd2f.jpg";
function Eom() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "calc(100vh - 56px)" }}
    >
      <h3
        style={{
          fontSize: "24px",
          fontWeight: "semi-bold",
          letterSpacing: ".6px",
        }}
      >
        Employee Of The Month
      </h3>
      <p
        style={{ fontSize: "20px", fontWeight: "bold", letterSpacing: ".6px" }}
      >
        Amine Hatar
      </p>
      <small
        style={{
          fontSize: "16px",
          fontWeight: "normal",
          letterSpacing: ".6px",
          marginBottom: "10px",
        }}
      >
        Front End Developper
      </small>
      <Image
        src={imageProfile}
        width="130"
        height="130"
        className="rounded-circle mx-auto d-block "
      />
    </div>
  );
}

export default Eom;
