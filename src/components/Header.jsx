import ico from "../assets/ico.png";
import github from "../assets/github.png";
import { Link } from "react-router-dom";

export default function Header() {
  return(
    <main className="header-main">

      <Link to="/"><div className="header-brand-con">
        <img src={ico} alt="Wanderplan" className="header-brand-ico" />
        <div className="header-brand-name">Wanderplan</div>
      </div></Link>

      <div className="header-space"></div>

      <div className="header-nav-con">
        <div>
          <Link to="/"><div className="header-nav-li" title="Home">Home</div></Link>
          <div className="header-nav-li" title="Trip Planner">Trip Planner</div>
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