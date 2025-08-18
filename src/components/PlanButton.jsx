import add from "../assets/add.svg";

export default function PlanButton() {
  return(
    <main className="planbutton-main">
      <img src={add} alt="Plan Your Trip" className="planbutton-ico" />
      <div className="planbutton-text">Plan Your Trip</div>
    </main>
  );
}