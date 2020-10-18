import React from "react";
import Header from "../header/header.jsx";

const Main = (props) => {
  // eslint-disable-next-line react/prop-types
  const {currentTemp} = props;

  return (
    <React.Fragment>
      <Header />
      <main>
        <div>
          {currentTemp}
        </div>
      </main>
    </React.Fragment>
  );
};

export default Main;
