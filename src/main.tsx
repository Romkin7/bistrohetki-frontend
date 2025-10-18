import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import Seo from "./Seo";
import ChakraProvider from "./chakraUI/ui/provider";
import store from "./store/store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider defaultTheme="light">
      <Provider store={store}>
        <Seo />
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
