import NavBar from "./components/NavBar";
import FaceMasher from "./components/FaceMasher";

import { useState } from "react";

function App() {
  const handleSelectItem = (navElement: string) => {
    setCurrentSite(navElement);
  };

  const navSites = ["FaceMash", "Rankings", "About", "Kys"];

  const [currentSite, setCurrentSite] = useState("FaceMash");

  return (
    <>
      <NavBar navSites={navSites} onSelectItem={handleSelectItem}></NavBar>
      <br />
      <br />
      {currentSite === "FaceMash" && <FaceMasher />}
      {currentSite === "Rankings" && (
        <div className="text-light">Here are the Rankings.</div>
      )}
      {currentSite === "About" && <div className="text-light">About Us</div>}
      {currentSite === "Kys" && <div className="text-light">Contact Us</div>}
    </>
  );
}

export default App;
