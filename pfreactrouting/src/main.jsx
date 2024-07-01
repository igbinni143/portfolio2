import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import DREAMPAGE from "./components/dreammain";
import LANGUAGEPAGE from "./components/languagemain";
import Boardmain from "./components/boardmain";
import Loginppage from "./components/loginppage";
import Communitypage from "./components/communitypage";
import Post from "./post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/dreammain",
    element: <DREAMPAGE />,
  },
  {
    path: "/languagemain",
    element: <LANGUAGEPAGE />,
  },
  {
    path: "/boardmain",
    element: <Boardmain />,
  },
  {
    path: "/loginpage",
    element: <Loginppage />,
  },
  {
    path: "/community",
    element: <Communitypage />, // 여기에서 Communitypage 대신 Post를 사용
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
