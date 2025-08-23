import { motion } from "motion/react"

export default function Hero() {
  return(
    <main className="hero-main">
      <div className="hero-title-con">
        <motion.div initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5}} className="hero-title">Plan Your Perfect Journey</motion.div>
        <div className="hero-text">Organize trips, track budgets, and explore destinations all in one place. <br></br>Start planning your next adventure today.</div>
      </div>
    </main>
  );
}