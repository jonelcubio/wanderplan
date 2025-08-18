import budget from "../assets/budget.svg";

export default function ViewBudgetButton() {
  return(
    <main className="viewbudgetbtn-main">
      <img src={budget} alt="View Budget" className="planbutton-ico" />
       <div className="viewbudgetbtn-text">View Budget</div>
    </main>
  );
}