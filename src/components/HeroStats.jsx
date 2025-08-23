import pin from "../assets/pin.svg";
import cale from "../assets/cale.svg";
import dollar from "../assets/dollar.svg";
import { motion } from "motion/react"


export default function HeroStats() {
  return(
    <main className="herostats-main">
      <div className="herostats-con">

        <div className="herostats-destination-li">
          <img src={pin} alt="Destinations Saved" className="herostats-ico" />
          <div className="herostats-des-count count">0</div>
          <div className="herostats-title">Destinations Saved</div>
        </div>

        <div className="herostats-active-li">
          <img src={cale} alt="Active Trips" className="herostats-ico" />
          <div className="herostats-act-count count">0</div>
          <div className="herostats-title">Active Trips</div>
        </div>

        <div className="herostats-budget-li">
          <img src={dollar} alt="Total Budget" className="herostats-ico" />
          <div className="herostats-bud-count count">0</div>
          <div className="herostats-title">Total Budget</div>
        </div>
      </div>
    </main>
  )
}