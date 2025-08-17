import ico from "../assets/ico.png";

export default function Header() {
  return(
    <main className="header-main">

      <div className="header-brand-con">
        <img src={ico} alt="Wanderplan" className="header-brand-ico" />
        <div className="header-brand-name">Wanderplan</div>
      </div>

      <div className="header-space"></div>

      <div className="header-nav-con">
        <div>
          <div className="header-nav-li">Home</div>
          <div className="header-nav-li">Trip Planner</div>
          <div className="header-nav-li">Budget</div>
          <div className="header-nav-li">Map</div>
          <div className="header-nav-li">Settings</div>
        </div>
      </div>
    </main>
  );
}