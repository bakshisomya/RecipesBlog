import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#e91e63", // This is an orange looking color
    },
    secondary: {
      main: "#e91e63", //Another orange-ish color
    },
  },
});
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
