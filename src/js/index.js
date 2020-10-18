import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import "./../scss/style.scss";

const currentTemp = 28;

ReactDOM.render(
    <App
      currentTemp={currentTemp}
    />,
    document.querySelector(`#root`)
);

