import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage/home";
import Layout from "./component/body/layout";

import ProductDetailsContainer from "./pages/productDetails/productPage";
import AboutProductDetailPage from "./component/productdetails/allDetails/aboutProduct";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path=":id" element={<ProductDetailsContainer />}>
        <Route index element={<AboutProductDetailPage />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
