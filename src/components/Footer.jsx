import ico from "../assets/ico.png";
export default function Footer() {
  return(
    <main className="footer-main">
      <div className="footer-brand-con">
        <img src={ico} alt="Wanderplan" className="footer-brand-ico" />
        <div className="footer-brand-title">Wanderplan</div>
      </div>

      <div className="footer-space"></div>

      <div className="footer-nav-notes">Made with ❤️ & 🪲by <a href="https://github.com/jonelcubio/wanderplan">Jonel Cubio</a></div>
    </main>
  );
}