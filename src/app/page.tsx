import TopBar from "../components/TopBar";
import Hero from "../components/Hero";
import Problema from "../components/Problema";
import Servicios from "../components/Servicios";
import Casos from "../components/Casos";
import Opiniones from "../components/Opiniones";
import DondeMeHasVisto from "../components/DondeMeHasVisto";
import Proceso from "../components/Proceso";
import SobreMi from "../components/SobreMi";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Hero />
      <Problema />
      <Servicios />
      <Casos />
      <Opiniones />
      <DondeMeHasVisto />
      <Proceso />
      <SobreMi />
      <Contacto />
      <Footer />
    </>
  );
}
