import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LearnMethod from "./components/LearnMethod";
import Count from "./components/Count";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/learn" element={<LearnMethod />} />
      <Route path="/count" element={<Count />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
