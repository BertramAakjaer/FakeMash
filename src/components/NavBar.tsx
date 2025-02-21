import { useState } from "react";
import dogImage from "../../public/dog.png";

interface Props {
  navSites: string[];
  onSelectItem: (navElement: string) => void;
}

function NavBar({ onSelectItem, navSites }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark border-bottom border-white border-opacity-25">
        <div className="container-fluid justify-content-center">
          <ul className="d-flex justify-content-between container-fluid">
            <li></li>
            <li className="countainer-fluid">
              <ul className="navbar-nav fw-bold fs-3 countainer-fluid mt-4">
                {navSites.map((site, index) => (
                  <li
                    className={
                      selectedIndex === index
                        ? "nav-item active border border-white border-opacity-50 rounded-2 mx-5"
                        : "nav-item mx-5"
                    }
                    key={site}
                    onClick={() => {
                      setSelectedIndex(index);
                      onSelectItem(site);
                    }}
                  >
                    <a className="nav-link" href="#">
                      {site}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <img
                src={dogImage}
                style={{ width: "4rem" }}
                className="rounded mt-3"
                alt="Image 1"
              />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
