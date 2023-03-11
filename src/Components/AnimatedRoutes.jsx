import { Routes, Route, useLocation, } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import React from "react";
import Home from "../Pages/Home";
import Marketplace from "../Pages/Marketplace";
import AuctionsPage from "../Pages/AuctionsPage"
import Drop from "../Pages/Drop";
import MarketplaceP1 from "./MarketplaceP1";
import MarketplaceP2 from "./MarketplaceP2";
import MarketplaceP3 from "./MarketplaceP3";
import MarketplaceP4 from "./MarketplaceP4";
import MarketplaceP5 from "./MarketplaceP5";
import MarketplaceP6 from "./MarketplaceP6";
import MarketplaceP7 from "./MarketplaceP7";
import MarketplaceP8 from "./MarketplaceP8";
import MarketplaceP9 from "./MarketplaceP9";


const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait' initial={false}>
      <Routes location={location} key={location.pathname}>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/marketplace" element={<Marketplace />} />
              <Route exact path="/marketplace/p1" element={<MarketplaceP1 />} />
              <Route exact path="/marketplace/p2" element={<MarketplaceP2 />} />
              <Route exact path="/marketplace/p3" element={<MarketplaceP3 />} />
              <Route exact path="/marketplace/p4" element={<MarketplaceP4 />} />
              <Route exact path="/marketplace/p5" element={<MarketplaceP5 />} />
              <Route exact path="/marketplace/p6" element={<MarketplaceP6 />} />
              <Route exact path="/marketplace/p7" element={<MarketplaceP7 />} />
              <Route exact path="/marketplace/p8" element={<MarketplaceP8 />} />
              <Route exact path="/marketplace/p9" element={<MarketplaceP9 />} />

        
               <Route exact path="/auctions" element={<AuctionsPage />} />
              <Route exact path="/drop" element={<Drop />} />
          
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
