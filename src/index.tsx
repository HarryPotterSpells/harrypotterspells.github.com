import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Component imports
import { Home } from "./pages/Home";
import { Commands } from "./pages/Commands";
import { Config } from "./pages/Config";
import { Contact } from "./pages/Contact";
import { Downloads } from "./pages/Downloads";
import { Spells } from "./pages/Spells";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "commands",
        element: <Commands />
      },
      {
        path: "config",
        element: <Config />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "downloads",
        element: <Downloads />
      },
      {
        path: "spells",
        element: <Spells />
      }
    ]
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
