import { type FC } from "react";
import { RouterProvider } from "react-router";
import router from "./browserRouter/browserRouter";

const App: FC = () => {
  // This function can be used to handle any app-wide logic or state management
  return <RouterProvider router={router} />;
};

export default App;
