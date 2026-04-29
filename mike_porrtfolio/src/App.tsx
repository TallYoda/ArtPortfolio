// React import not required with the new JSX transform
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PortfolioGrid from "./components/PortfolioGrid";
import About from "./components/about";
import Contact from "./components/Contact";

function App() {
  const path = typeof window !== "undefined" ? window.location.pathname.toLowerCase() : "/";
  const isDialogueRoute = path === "/thedialogue";

  if (isDialogueRoute) {
    return (
      <>
        <Navbar />
        <main className="min-vh-100 d-flex align-items-center bg-light">
          <section className="container py-5">
            <h1 className="fw-bold mb-3">The Dialogue</h1>
            <p className="lead mb-4">
              This experience is now routed at <code>/theDialogue</code>. Deployment for the interactive build is in
              progress.
            </p>
            <a className="btn btn-dark" href="/" role="button">
              Back to portfolio
            </a>
          </section>
        </main>
        <Analytics />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Hero />
      <PortfolioGrid />
      <About />
      <Contact />
      <Analytics />
    </>
  );
}

export default App;
