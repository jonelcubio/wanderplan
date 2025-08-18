import { useState } from "react";
import ico from "../assets/ico.png";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import github from "../assets/github.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return(
    <main className="header-main">

      <Link to="/"><div className="header-brand-con">
        <img src={ico} alt="Wanderplan" className="header-brand-ico" />
        <div className="header-brand-name">Wanderplan</div>
      </div></Link>

      <div className="header-space"></div>

      <button className="header-menu-con" 
      onClick={() => setIsOpen(!isOpen)}>
        <img src={isOpen ? close : menu} alt="Menu" className="header-menu-ico" />
      </button>

      {/* Mobile View Menu*/}
      <div className={`absolute md:static top-14 left-0 w-full md:w-auto bg-gray-950 md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ease-in px-2.5 py-2.5
          ${isOpen ? "block" : "hidden md:block"}`}>
        <div>
          
          <Link to="/"><div className="header-nav-li" title="Home">Home</div></Link>
          <Link to="/trip"><div className="header-nav-li" title="Trip Planner">Trip Planner</div></Link>
          <div className="header-nav-li" title="Budget">Budget</div>
          <div className="header-nav-li" title="Map">Map</div>
          <div className="header-nav-li" title="Settings">Settings</div>
          <div className="header-nav-github">
            <Link to="https://github.com/jonelcubio/wanderplan"><img src={github} target="_blank" rel="noopener noreferrer" alt="Github" className="header-nav-github-ico" title="Visit the Github Repo"/></Link>
          </div>
        </div>
      </div>
    </main>
  );
}