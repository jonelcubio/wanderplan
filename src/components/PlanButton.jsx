import add from "../assets/add.svg";
import { Link } from "react-router-dom";

export default function PlanButton() {
  return(
    <Link to="/trip"><main className="planbutton-main">
      <img src={add} alt="Plan Your Trip" className="planbutton-ico" />
      <div className="planbutton-text">Plan Your Trip</div>
    </main> </Link>
  );
}