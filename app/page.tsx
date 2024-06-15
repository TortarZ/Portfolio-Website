import Maincontent from "./components/Maincontent";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Article from "./components/Article";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Maincontent />
      <Article />
      <Contact />
      <Footer />
    </>
  );
}
