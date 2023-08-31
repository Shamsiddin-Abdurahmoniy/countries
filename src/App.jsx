// style
import "./index.css";
// react
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";
// layout
import RootLayout from "./layout/RootLayout";
// pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
// loaders
import { DotPulse } from "@uiball/loaders";
// hooks
import useFetch from "./hooks/useFetch";
// components
import PageNotFound from "./components/error/PageNotFound";
function App() {
  const { isPending, error } = useFetch(false);
  const [mode, setMode] = useState(false);
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout mode={mode} setMode={setMode} />}>
        <Route index element={<Home mode={mode} />} />
        <Route path="/about/:slug" element={<About mode={mode} />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return (
    <div className={`App ${mode ? "dark-mode" : "light-mode"}`}>
      {isPending && (
        <div className="overlay">
          <DotPulse size={80} speed={1.3} color="white" />
        </div>
      )}
      {error && <PageNotFound />}
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
