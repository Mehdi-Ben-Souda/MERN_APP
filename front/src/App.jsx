import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import { LandingPage } from "./pages/landing";
import Alimentateur from "./pages/alimentateur/Alimentateur";
import Error404 from "./pages/Error404";
import { ProductManage } from "./pages/alimentateur/ProductManage";
import { StoreManage } from "./pages/StoreManage";
import Producteur from "./pages/producteur/Producteur";
export default function App() {
  return(
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<LandingPage />}> </Route>
      <Route path="/alimentateur" element={<Alimentateur/>}></Route>
      <Route path="/alimentateur/gerer-produits" element={<ProductManage/>}></Route>
      <Route path="/alimentateur/gerer-store" element={<StoreManage/>}></Route>

      <Route path="/producteur" element={<Producteur/>}></Route>
      <Route path="*" element={<Error404/>}></Route>

      </Routes>
    </BrowserRouter>

  );

} 