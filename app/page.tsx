import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Room from "./components/Room";
import Visit from "./components/Visit";
import Footer from "./components/Footer";
import CallPill from "./components/CallPill";

export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />
      <Services />
      <Gallery />
      <Room />
      <Visit />
      <Footer />
      <CallPill />
    </main>
  );
}
