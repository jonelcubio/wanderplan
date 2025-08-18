import Header from "../components/Header";
import Hero from "../components/Hero";
import HeroStats from "../components/HeroStats";
import PlanButton from "../components/PlanButton";
import ViewBudgetButton from "../components/ViewBudgetButton";
import Footer from "../components/Footer";

export default function Home() {
  return(
    <main className="home-main">
      <Header />
      <Hero />
      <HeroStats />
    
      <div className="home-button-con">
        <PlanButton />
        <ViewBudgetButton />
      </div>

      <Footer />
     
    </main>
  );
}